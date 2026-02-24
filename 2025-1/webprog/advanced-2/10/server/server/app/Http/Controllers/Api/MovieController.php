<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movies = Movie::with('screenings')->get();
        return response()->json($movies);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
                'duration' => 'required|integer|min:1',
                'director' => 'required|string|max:255',
                'genre' => 'required|string|max:255',
                'release_year' => 'required|integer|min:1900|max:' . (date('Y') + 1)
            ]);

            $imagePath = $request->file('image')->store('movies', 'public');

            $movie = Movie::create([
                'title' => $request->title,
                'description' => $request->description,
                'image_path' => $imagePath,
                'duration' => $request->duration,
                'director' => $request->director,
                'genre' => $request->genre,
                'release_year' => $request->release_year
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'Movie added successfully!',
                'data' => $movie
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Movie addition failed due to validation errors',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to add movie. Please try again later.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        return response()->json($movie->load('screenings'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Movie $movie)
    {
        $request->validate([
            'title' => 'string|max:255',
            'description' => 'string',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            'duration' => 'integer|min:1',
            'director' => 'string|max:255',
            'genre' => 'string|max:255',
            'release_year' => 'integer|min:1900|max:' . (date('Y') + 1)
        ]);

        if ($request->hasFile('image')) {
            // Delete old image
            if ($movie->image_path) {
                Storage::disk('public')->delete($movie->image_path);
            }
            $imagePath = $request->file('image')->store('movies', 'public');
            $movie->image_path = $imagePath;
        }

        $movie->update($request->except('image'));

        return response()->json($movie);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie)
    {
        if ($movie->image_path) {
            Storage::disk('public')->delete($movie->image_path);
        }
        
        $movie->delete();
        return response()->json(null, 204);
    }
}
