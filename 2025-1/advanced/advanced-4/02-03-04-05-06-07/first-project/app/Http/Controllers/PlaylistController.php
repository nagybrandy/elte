<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Playlist;
use App\Models\Track;
use Illuminate\Support\Facades\Auth;
class PlaylistController extends Controller
{
    public function index()
    {

        $playlists = Playlist::all();
        $ourPlaylists = [];
        foreach ($playlists as $playlist) {
            $playlist->tracks = $playlist->tracks()->get();
            $playlist->tracks_count = $playlist->tracks()->count();
        }
        if(Auth::user()) {
            $ourPlaylists = Playlist::where('user_id', Auth::user()->id)->get();
            $playlists = Playlist::where('user_id', '!=', Auth::user()->id)->get();
        }
        return view('playlists.index', compact('playlists', 'ourPlaylists'));
    }

    public function edit($playlistId)
    {

        if(Auth::user()->id != Playlist::find($playlistId)->user_id) {
            return redirect()->route('playlists.index')->with('error', 'You are not authorized to edit this playlist');
        }
        $playlist = Playlist::find($playlistId);
        $tracks = Track::all();
        return view('playlists.edit', compact('playlist', 'tracks'));
    }

    public function update(Request $request, $playlistId)
    {
        $playlist = Playlist::find($playlistId);
        $playlist->update($request->all());
        $playlist->tracks()->sync($request->tracks);
        $playlist->save();
        return redirect()->route('playlists.index');
    }

    public function destroy($playlistId)
    {
        $playlist = Playlist::find($playlistId);
        $playlist->delete();
        return redirect()->route('playlists.index');
    }

    public function create()
    {
        $tracks = Track::all();
        return view('playlists.create', compact('tracks'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'genre' => 'required',
        ]);

        $playlist = new Playlist($request->all());
        $playlist->user_id = Auth::user()->id;

        // Handle image upload if present
        if ($request->hasFile('image')) {
            $playlist->image = $request->file('image')->store('images', 'public');
        }
        
        $playlist->save();

        if ($request->has('tracks')) {
            $playlist->tracks()->sync($request->tracks);
        }

        return redirect()->route('playlists.index')->with('success', 'Playlist created successfully!');
    }
    
}
