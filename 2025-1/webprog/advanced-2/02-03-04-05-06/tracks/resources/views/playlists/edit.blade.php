@extends('layouts.app')

@section('content')
<div class="max-w-md p-5 mx-auto my-4">
    <h1 class="mb-8 text-3xl font-bold text-center">Edit Playlist</h1>
    
    <form action="{{ route('playlists.update', $playlist->id) }}" method="POST" class="flex flex-col space-y-4 rounded-lg bg-base-300">
        @csrf
        @method('PUT')
        
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Name</legend>
            <input type="text" name="name" value="{{ $playlist->name }}" 
                   class="w-full input" placeholder="Type here" />
        </fieldset>
        
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Description</legend>
            <textarea name="description" rows="4" 
                      class="w-full textarea" placeholder="Type here">{{ $playlist->description }}</textarea>
        </fieldset>

        <fieldset class="fieldset">
            <legend class="fieldset-legend">Tracks</legend>
            <select name="tracks[]" multiple 
                    class="w-full select select-bordered h-60">
                @foreach ($allTracks as $track)
                    <option value="{{ $track->id }}" {{ $playlistTracks->contains($track->id) ? 'selected' : '' }}>{{ $track->name }}</option>
                @endforeach
            </select>
        </fieldset>

        <div class="flex justify-end space-x-4">
            <a href="{{ route('playlists.index') }}" 
               class="btn btn-ghost">
                Cancel
            </a>
            <button type="submit" 
                    class="btn btn-primary">
                Update Playlist
            </button>
        </div>
    </form>
</div>
@endsection
