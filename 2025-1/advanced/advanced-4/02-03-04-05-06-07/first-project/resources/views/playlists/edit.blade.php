@extends('layouts.app')

@section('title', 'Edit Playlist')

@section('content')
<div class="container w-6/12 mx-auto">
    <h1 class="text-2xl font-bold">Edit Playlist</h1>
    <form action="{{ route('playlists.update', $playlist->id) }}" method="post" class="flex flex-col space-y-4">
        @csrf
        @method('put')
        <label class="flex items-center gap-2 input input-bordered">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" class="grow" id="title" name="title" value="{{ $playlist->title }}" placeholder="Title">
        </label>

        <label class="flex items-center gap-2 input input-bordered">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
                <path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" />
            </svg>
            <textarea class="grow" id="description" name="description" placeholder="Description">{{ $playlist->description }}</textarea>
        </label>

        <label class="flex items-center gap-2 input input-bordered">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" class="grow" id="genre" name="genre" value="{{ $playlist->genre }}" placeholder="Genre">
        </label>

        <div class="form-group">
            <label for="tracks" class="block mb-2 text-sm font-medium">Select Tracks</label>
            <select multiple id="tracks" name="tracks[]" class="w-full p-2 h-44 select select-bordered">
                @foreach ($tracks as $track)
                    <option value="{{ $track->id }}" {{ $playlist->tracks->contains($track->id) ? 'selected' : '' }}>
                        {{ $track->title }} - {{ $track->artist }}
                    </option>
                @endforeach
            </select>
            <p class="mt-1 text-xs text-gray-500">Hold Ctrl (Windows) or Command (Mac) to select multiple tracks</p>
        </div>

        <button type="submit" class="btn btn-primary">Update</button>
    </form>
</div>
@endsection