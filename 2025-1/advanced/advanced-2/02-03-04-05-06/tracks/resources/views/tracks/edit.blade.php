@extends('layouts.app')

@section('content')

@if (session('success'))
    <div class="toast">
        <div class="alert alert-success">
          <span>{{ session('success') }}</span>
        </div>
      </div>
      <script>
        setTimeout(() => {
            document.querySelector('.toast').remove();
        }, 3000);
      </script>
@endif
<div class="flex flex-row items-center justify-between max-w-md mx-auto my-4">
    <h1 class="w-8/12 mx-auto my-4 mb-6 text-4xl font-bold">Edit track</h1>
    <div class="w-8/12 mx-auto my-4 mb-6 text-xs italic text-right">
        <p>Track ID: {{ $track->id }}</p>
        <p>Track Name: {{ $track->name }}</p>
        <p>Track Artist: {{ $track->artist }}</p>
        <p>Track Album: {{ $track->album }}</p>
        <p>Track Length: {{ $track->length }}</p>
        <p>Track Release Year: {{ $track->release_year }}</p>
    </div>
</div>


<form action="{{ route('tracks.edit', $track->id) }}" method="POST" class="flex flex-col max-w-md p-5 mx-auto my-4 space-y-4 rounded-lg bg-base-300">
    @csrf
    @method('PUT')
        <fieldset class="fieldset" >
            <legend class="fieldset-legend">Title</legend>
            <input type="text" class="w-full input" placeholder="Type here" name="name" value="{{ $track->name }}" />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Artist</legend>
            <input type="text" class="w-full input" placeholder="Type here" name="artist" value="{{ $track->artist }}" />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Album</legend>
            <input type="text" class="w-full input" placeholder="Type here" name="album" value="{{ $track->album }}" />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Length</legend>
            <input type="number" class="w-full input" placeholder="Type here" name="length" value="{{ $track->length }}" />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Release Year</legend>
            <input type="number" class="w-full input" placeholder="Type here" name="release_year" value="{{ $track->release_year }}" />
        </fieldset>
        <button type="submit" class="w-full my-5 btn btn-primary">Update Track</button>
    </form>
</form>
@endsection

