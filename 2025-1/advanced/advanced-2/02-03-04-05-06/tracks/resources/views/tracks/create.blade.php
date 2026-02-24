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

<form action="{{ route('tracks.store') }}" method="POST" class="flex flex-col max-w-md p-5 mx-auto my-4 space-y-4 rounded-lg bg-base-300">
    @csrf
        <fieldset class="fieldset" >
            <legend class="fieldset-legend">Title</legend>
            <input type="text" class="w-full input" placeholder="Type here" name="name"     />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Artist</legend>
            <input type="text" class="w-full input" placeholder="Type here" name="artist" />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Album</legend>
            <input type="text" class="w-full input" placeholder="Type here" name="album" />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Length</legend>
            <input type="number" class="w-full input" placeholder="Type here" name="length" />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Release Year</legend>
            <input type="number" class="w-full input" placeholder="Type here" name="release_year" />
        </fieldset>
        <button type="submit" class="w-full my-5 btn btn-primary">Create Track</button>
    </form>
</form>
@endsection

