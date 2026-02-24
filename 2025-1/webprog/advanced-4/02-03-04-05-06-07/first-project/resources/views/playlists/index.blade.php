@extends('layouts.app')

@section('title', 'Playlists')

@section('content')
<div class="container w-6/12 mx-auto">
    @auth
    @if(Auth::user()->playlists->count() > 0)
    <div class="flex flex-row items-center justify-between">
        <h1 class="text-2xl font-bold">My Playlists</h1>
        <a href="{{ route('playlists.create') }}" class="btn btn-primary">Create</a>
    </div>
    <ul class="shadow-md list bg-base-100 rounded-box">

        @foreach ($ourPlaylists as $playlist)
        <li class="list-row">

            <div class="text-4xl font-thin opacity-30 tabular-nums">{{ $playlist->id }}</div>
            {{-- if the image can't load in add a default image --}}
            @if($playlist->image)
            <div><img class="size-10 rounded-box" src="{{ asset(path: 'storage/' . $playlist->image) }}" /></div>
            @else
            <div><img class="size-10 rounded-box" src="{{ asset(path: 'storage/default.jpg') }}" /></div>
            @endif

            <div>
                <div>{{ $playlist->title }}</div>
                <div class="text-xs font-semibold uppercase opacity-60">{{ $playlist->user->name }}</div>
                <div class="text-xs font-semibold uppercase opacity-60">{{ $playlist->description }}</div>
            </div>
            <div class="flex flex-col items-center justify-center italic">
                <div>{{ $playlist->tracks->count() }} tracks</div>
            </div>
            <div class="flex flex-row items-center justify-center gap-2">
                @auth
                @if($playlist->user_id == Auth::user()->id)

                <a href="{{ route('playlists.edit', $playlist->id) }}" class="text-yellow-600 btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="currentColor">
                        <path
                            d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                    </svg>
                </a>

                <form action="{{ route('playlists.destroy', $playlist->id) }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="text-red-800 btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="currentColor">
                            <path
                                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                        </svg>
                    </button>
                </form>
                @endif
                @endauth
                <a href="{{ route('tracks.index', ['playlist_id' => $playlist->id]) }}"
                    class="btn btn-square btn-ghost">
                    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none"
                            stroke="currentColor">
                            <path d="M6 3L20 12 6 21 6 3z"></path>
                        </g>
                    </svg>
                </a>
            </div>
        </li>
        @endforeach
        @endif
        @endauth
        <h1 class="text-2xl font-bold">Playlists</h1>
        <ul class="shadow-md list bg-base-100 rounded-box">

            @foreach ($playlists as $playlist)
            <li class="list-row">
                <div class="text-4xl font-thin opacity-30 tabular-nums">{{ $playlist->id }}</div>
                <div>
                    <div>{{ $playlist->title }}</div>
                    <div class="text-xs font-semibold uppercase opacity-60">{{ $playlist->user->name }}</div>
                    <div class="text-xs font-semibold uppercase opacity-60">{{ $playlist->description }}</div>
                </div>
                <div class="flex flex-col items-center justify-center italic">
                    <div>{{ $playlist->tracks->count() }} tracks</div>
                </div>
                <div class="flex flex-row items-center justify-center gap-2">
                    @auth
                    @if($playlist->user_id == Auth::user()->id)

                    <a href="{{ route('playlists.edit', $playlist->id) }}"
                        class="text-yellow-600 btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="currentColor">
                            <path
                                d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                        </svg>
                    </a>

                    <form action="{{ route('playlists.destroy', $playlist->id) }}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="text-red-800 btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="currentColor">
                                <path
                                    d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                            </svg>
                        </button>
                    </form>
                    @endif
                    @endauth
                    <a href="{{ route('tracks.index', ['playlist_id' => $playlist->id]) }}"
                        class="btn btn-square btn-ghost">
                        <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none"
                                stroke="currentColor">
                                <path d="M6 3L20 12 6 21 6 3z"></path>
                            </g>
                        </svg>
                    </a>
                </div>
            </li>
            @endforeach

        </ul>
</div>
@endsection