@extends('layouts.app')
@section('title', 'Playlists')
@section('content')

<div class="flex justify-between w-8/12 mx-auto align-items ">
  <h1 class="my-4 mb-6 text-4xl font-bold ">Playlists</h1>
  <a class="btn btn-square btn-ghost" href="{{ route('playlists.create') }}">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  </a>
</div>
{{-- add edit track button --}}




<ul class="w-8/12 mx-auto text-xs shadow-md list bg-base-100 rounded-box">

  @foreach ($playlists as $playlist)
  <li class="list-row">
    <div class="text-4xl font-thin opacity-30 tabular-nums">{{ $playlist->id }}</div>
    <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
    <div class="list-col-grow">
      <div>{{ $playlist->name }}</div>
      <div class="text-xs font-semibold uppercase opacity-60">{{ $playlist->user->name }}</div>
      <div class="text-xs font-semibold uppercase opacity-60">{{ $playlist->description }}</div>
    </div>
    @auth
    @if(Auth::user()->id == $playlist->user_id)
    <div>
      <a class="btn btn-square btn-ghost" href="{{ route('playlists.edit', $playlist->id) }}">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-pencil">
          <path
            d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
          <path d="m15 5 4 4" />
        </svg> </a>
    </div>
    @endif
    @endauth
    <div class="flex flex-col justify-center text-xs italic font-semibold opacity-60">
      <div>Number of tracks: {{ $playlist->tracksCount }}</div>
    </div>
    <a class="btn btn-square btn-ghost" href="{{ route('tracks.viewTracks', [" playlist_id"=> $playlist->id]) }}">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
          <path d="M6 3L20 12 6 21 6 3z"></path>
        </g>
      </svg>
    </a>
  </li>
  @endforeach
</ul>

</ul>
@endsection