<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Playlist;
use App\Models\Track;
class PlaylistController extends Controller
{
    public function index(){
        $playlists = Playlist::all();
        
        foreach ($playlists as $playlist) {
            $playlist->tracksCount = $playlist->tracks()->count();
        }

        return view('playlists.index', compact('playlists'));
    }
    public function edit($id){
        if(Auth::user()->id != Playlist::find($id)->user_id){
            return redirect()->route('playlists.index')->with('error', 'You are not authorized to edit this playlist');
        }
        $playlist = Playlist::find($id);
        $allTracks = Track::all();
        $playlistTracks = $playlist->tracks;
        return view('playlists.edit', compact('playlist', 'allTracks', 'playlistTracks'));
    }
    public function update(Request $request, $id){
        $playlist = Playlist::find($id);
        $playlist->name = $request->name;
        $playlist->description = $request->description;
        $playlist->tracks()->sync($request->tracks);
        $playlist->save();
        return redirect()->route('playlists.index');
    }
    public function delete($id){
        if(Auth::user()->id != Playlist::find($id)->user_id){
            return redirect()->route('playlists.index')->with('error', 'You are not authorized to delete this playlist');
        }
        $playlist = Playlist::find($id);
        $playlist->delete();
        return redirect()->route('playlists.index');
    }
    public function create(){
        $allTracks = Track::all();
        return view('playlists.create', compact('allTracks'));
    }
    public function store(Request $request){
        $playlist = new Playlist();
        $playlist->name = $request->name;
        $playlist->description = $request->description;
        $playlist->user_id = Auth::user()->id;
        $playlist->save();
        $playlist->tracks()->sync($request->tracks);
        return redirect()->route('playlists.index')->with('success', 'Playlist created successfully');
    }
}
