
@extends('layouts.app')

@section('content')

<div class="container w-8/12 p-10 mx-auto">   
    <h1 class="text-4xl font-bold">{{ isset($tracks->playlist) ? 'Playlist: ' . $tracks->playlist->title : 'All Tracks' }}    <a href="{{ route('tracks.create') }}" class="btn btn-primary">Create</a>
    </h1>
    <div class="overflow-y-auto max-h-96">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Duration</th>
              <th>Release Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            @foreach ($tracks as $track)
            <tr class="hover:bg-base-300">
              <th>{{ $track->id }}</th>
              <td>{{ $track->title }}</td>
              <td>{{ $track->artist }}</td>
              <td>{{ $track->album }}</td>
              <td>{{ $track->duration }}</td>
              <td>{{ $track->release_year }}</td>
              <td class="flex flex-col justify-between h-full">
                <a href="{{ route('tracks.edit', $track->id) }}" class="w-full mb-1 btn btn-warning btn-xs">Edit</a>
                <form action="{{ route('tracks.destroy', $track->id) }}" method="POST">
                  @csrf
                  @method('DELETE')
                  <button type="submit" class="w-full btn btn-error btn-xs">Delete</button>
                </form>
              </td>
            </tr>
            @endforeach
          </tbody>
        </table>
    </div>
  </div>
@endsection
