<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Screening;
use App\Models\Room;
use App\Models\Booking;
use App\Http\Resources\ScreeningResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class ScreeningController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $screenings = Screening::with(['movie', 'room', 'bookings'])->get();
        return ScreeningResource::collection($screenings);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'movie_id' => 'required|exists:movies,id',
                'room_id' => 'required|exists:rooms,id',
                'start_time' => 'required|date|after:now',
                'is_3d' => 'required|boolean',
                'price' => 'required|numeric|min:0'
            ]);

            // Check if the room supports 3D when scheduling a 3D screening
            if ($request->is_3d) {
                $room = Room::findOrFail($request->room_id);
                if (!$room->has_3d) {
                    return response()->json([
                        'status' => 'error',
                        'message' => 'This room does not support 3D screenings'
                    ], 422);
                }
            }

            // Check for time conflicts in the same room
            $conflictingScreenings = Screening::where('room_id', $request->room_id)
                ->where('start_time', '<=', $request->start_time)
                ->where(function ($query) use ($request) {
                    $query->where('start_time', '>=', $request->start_time);
                })
                ->exists();

            if ($conflictingScreenings) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'There is already a screening scheduled in this room at this time'
                ], 422);
            }

            $screening = Screening::create($request->all());
            return response()->json([
                'status' => 'success',
                'message' => 'Screening added successfully!',
                'data' => new ScreeningResource($screening->load(['movie', 'room']))
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Screening addition failed due to validation errors',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to add screening. Please try again later.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Screening $screening)
    {
        $screening->load(['movie', 'room', 'bookings']);
        return new ScreeningResource($screening);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Screening $screening)
    {
        $request->validate([
            'movie_id' => 'exists:movies,id',
            'room_id' => 'exists:rooms,id',
            'start_time' => 'date|after:now',
            'is_3d' => 'boolean',
            'price' => 'numeric|min:0'
        ]);

        if ($request->is_3d) {
            $room = Room::findOrFail($request->room_id ?? $screening->room_id);
            if (!$room->has_3d) {
                return response()->json([
                    'message' => 'This room does not support 3D screenings'
                ], 422);
            }
        }

        if ($request->has('start_time') || $request->has('room_id')) {
            $conflictingScreenings = Screening::where('room_id', $request->room_id ?? $screening->room_id)
                ->where('id', '!=', $screening->id)
                ->where('start_time', '<=', $request->start_time ?? $screening->start_time)
                ->where(function ($query) use ($request, $screening) {
                    $query->where('start_time', '>=', $request->start_time ?? $screening->start_time);
                })
                ->exists();

            if ($conflictingScreenings) {
                return response()->json([
                    'message' => 'There is already a screening scheduled in this room at this time'
                ], 422);
            }
        }

        $screening->update($request->all());
        return new ScreeningResource($screening->load(['movie', 'room']));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Screening $screening)
    {
        $screening->delete();
        return response()->json(null, 204);
    }
}
