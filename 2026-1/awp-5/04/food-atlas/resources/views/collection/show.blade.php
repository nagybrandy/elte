@extends('layout.layout')

@section('title', 'Food Atlas - Collection Details')

@section('content')
<main class="py-8 lg:py-12">
    <div class="container mx-auto px-4 lg:px-8 max-w-6xl">

      <!-- BREADCRUMB -->
      <nav class="breadcrumbs text-sm text-base-content/70 mb-8 px-0" aria-label="Breadcrumb">
        <ul>
          <li><a href="{{ route('landing') }}" class="hover:text-primary">Home</a></li>
          <li><a href="{{ route('collections.index') }}" class="hover:text-primary">Collections</a></li>
          <li class="text-base-content font-medium">{{ $collection->name }}</li>
        </ul>
      </nav>

      <!-- RECIPE HERO -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-12 border-b border-base-300">
        <figure class="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
          <img src="{{ $collection->image_file ? asset('storage/' . $collection->image_file) : $collection->image }}" alt="{{ $collection->name }}" class="w-full h-full object-cover" />
        </figure>
        <div>
          <div class="flex flex-wrap gap-2 mb-4">
            @if($collection->tags)
                @foreach (explode(',', $collection->tags) as $tag)
                    <span class="badge badge-secondary">{{ $tag }}</span>
                @endforeach
            @endif
          </div>
          <h1 class="font-serif text-3xl lg:text-4xl font-bold mb-4">{{ $collection->name }}</h1>
          <p class="text-base-content/80 leading-relaxed mb-6">{{ $collection->description }}</p>

          </div>

          <div class="flex flex-wrap gap-2">
            <a href="{{ route('collections.edit', $collection->id) }}" class="btn btn-outline btn-sm">
              Edit
            </a>
            <form action="{{ route('collections.destroy', $collection->id) }}" method="POST">
              @csrf
              @method('DELETE')
              <button type="submit" class="btn btn-outline btn-sm btn-error">
              Delete
            </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  </main>
@endsection