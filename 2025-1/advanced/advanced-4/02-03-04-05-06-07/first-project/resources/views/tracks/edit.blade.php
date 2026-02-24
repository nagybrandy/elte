@extends('layouts.app')

@section('content')
<div class="max-w-lg p-10 mx-auto">
    <div class="flex flex-row justify-between">
        <h1 class="text-4xl font-bold">Edit Track</h1>
        <div class="text-xs italic text-right">
            <p>{{ $track->title }}</p>
            <p>{{ $track->artist }}</p>
            <p>{{ $track->album }}</p>
            <p>{{ $track->duration }}</p>
            <p>{{ $track->release_year }}</p>
        </div>
    </div>
    
    <form action="{{ route('tracks.update', $track->id) }}" method="post" class="flex flex-col space-y-4">
        @csrf
        @method('PUT')
        <label class="flex items-center gap-2 input input-bordered">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" name="title" class="grow" placeholder="Title" value="{{ $track->title }}" />
        </label>

        <label class="flex items-center gap-2 input input-bordered">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" name="artist" class="grow" placeholder="Artist" value="{{ $track->artist }}" />
        </label>

        <label class="flex items-center gap-2 input input-bordered">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
                <path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" />
            </svg>
            <input type="text" name="album" class="grow" placeholder="Album" value="{{ $track->album }}" />
        </label>

        <label class="flex items-center gap-2 input input-bordered">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" name="duration" class="grow" placeholder="Duration" value="{{ $track->duration }}" />
        </label>
        <label class="flex items-center gap-2 input input-bordered">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" name="release_year" class="grow" placeholder="Release Year"   value="{{ $track->release_year }}" />
        </label>

        <button type="submit" class="btn btn-primary">Create</button>
    </form>
</div>
@endsection
