<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Screening;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Booking::with(['screening.movie', 'screening.room'])
            ->where('user_id', Auth::id())
            ->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'screening_id' => 'required|exists:screenings,id',
                'seats' => 'required|array|min:1',
                'seats.*.row' => 'required|integer|min:1',
                'seats.*.number' => 'required|integer|min:1'
            ]);

            $screening = Screening::with('room')->findOrFail($request->screening_id);
            $room = $screening->room;
            
            // Check if screening is in the future
            if ($screening->start_time->isPast()) {
                return response()->json([
                    'message' => 'Cannot book tickets for past screenings'
                ], 422);
            }

            // Validate seat positions against room dimensions
            foreach ($request->seats as $seat) {
                if ($seat['row'] > $room->rows || $seat['number'] > $room->seats_per_row) {
                    return response()->json([
                        'message' => "Invalid seat position: row {$seat['row']}, number {$seat['number']}"
                    ], 422);
                }
            }

            // Check if any of the requested seats are already taken
            $existingBookings = Booking::where('screening_id', $screening->id)
                ->where('status', '!=', 'cancelled')
                ->get();

            foreach ($request->seats as $requestedSeat) {
                foreach ($existingBookings as $booking) {
                    if (!$booking->seats) continue;
                    
                    foreach ($booking->seats as $bookedSeat) {
                        if ($bookedSeat['row'] == $requestedSeat['row'] && 
                            $bookedSeat['number'] == $requestedSeat['number']) {
                            return response()->json([
                                'message' => "Seat row {$requestedSeat['row']}, number {$requestedSeat['number']} is already taken"
                            ], 422);
                        }
                    }
                }
            }

            $booking = Booking::create([
                'user_id' => Auth::id(),
                'screening_id' => $request->screening_id,
                'seats' => $request->seats,
                'total_price' => $screening->price * count($request->seats),
                'status' => 'confirmed'
            ]);

            return $booking->load(['screening.movie', 'screening.room']);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Booking failed: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Booking $booking)
    {
        if (Auth::id() !== $booking->user_id) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 403);
        }

        return $booking->load(['screening.movie', 'screening.room']);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Booking $booking)
    {
        if (Auth::id() !== $booking->user_id) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 403);
        }

        if ($booking->screening->start_time->isPast()) {
            return response()->json([
                'message' => 'Cannot modify bookings for past screenings'
            ], 422);
        }

        $request->validate([
            'status' => 'required|in:confirmed,cancelled'
        ]);

        $booking->update([
            'status' => $request->status
        ]);

        return $booking->load(['screening.movie', 'screening.room']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Booking $booking)
    {
        if (Auth::id() !== $booking->user_id) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 403);
        }

        if ($booking->screening->start_time->isPast()) {
            return response()->json([
                'message' => 'Cannot cancel bookings for past screenings'
            ], 422);
        }

        $booking->delete();
        
        return response()->json(null, 204);
    }
}
