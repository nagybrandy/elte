<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Track;
use App\Models\Playlist;

class TrackController extends Controller
{
    public function index()
    {
        $playlist_id = isset($_GET['playlist_id']) ? $_GET['playlist_id'] : null;
        if($playlist_id) {
            $playlist = Playlist::find($playlist_id);
            $tracks = $playlist->tracks()->get();
            $tracks->playlist = $playlist;
        } else {
            $tracks = Track::all();
        }
        return view('tracks.index', compact('tracks'));
    }

    public function create()
    {
        return view('tracks.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'artist' => 'required',
            'album' => 'required',
            'duration' => 'required',
            'release_year' => 'required',
        ]);
        $track = Track::create($request->all());
        return redirect()->route('tracks.index')->with('success', 'Track created successfully!');
    }

    public function destroy($trackId)
    {
        $track = Track::find($trackId);
        $track->delete();
        return redirect()->route('tracks.index')->with('success', 'Track deleted successfully!');
    }

    public function edit($trackId)
    {
        $track = Track::find($trackId);
        return view('tracks.edit', compact('track'));
    }

    public function update(Request $request, $trackId)
    {
        $track = Track::find($trackId);
        $track->update($request->all());
        return redirect()->route('tracks.index')->with('success', 'Track updated successfully!');
    }
}
