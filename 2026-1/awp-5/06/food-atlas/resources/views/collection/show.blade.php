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
          <p class="text-base-content/80 leading-relaxed mb-6">Created by: {{ $collection->user->name ?? 'Unknown' }}</p>
          <p class="text-base-content/80 leading-relaxed mb-6">{{ $collection->description }}</p>

          </div>

          <div class="flex flex-wrap gap-2">
              @can('update', $collection)
            <a href="{{ route('collections.edit', $collection->id) }}" class="btn btn-outline btn-sm">
              Edit
            </a>
            @endcan
            @can('delete', $collection)
            <form action="{{ route('collections.destroy', $collection->id) }}" method="POST">
              @csrf
              @method('DELETE')
              <button type="submit" class="btn btn-outline btn-sm btn-error">
              Delete
            </button>
            </form>
            @endcan
          </div>
        </div>
      </section>

      <section class="container mx-auto px-4 lg:px-8 max-w-6xl gap-8 lg:gap-12 pb-12 border-b border-base-300">
        <div class="card-body">
          <h2 class="card-title font-serif mb-6">Recipes</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            @foreach($collection->recipes as $recipe)
            <a href="{{ route('recipes.show', $recipe->id) }}" class="card bg-base-200 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-primary/30 group focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-2xl">
              <figure class="aspect-[4/3] overflow-hidden rounded-t-2xl bg-base-300">
                <img src="{{ $recipe->image_file ? asset('storage/' . $recipe->image_file) : $recipe->image }}" alt="{{ $recipe->title }}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </figure>
              <div class="card-body p-5">
                <h3 class="card-title font-serif text-lg group-hover:text-primary transition-colors line-clamp-2">{{ $recipe->title }}</h3>
                <p class="text-sm text-base-content/70 line-clamp-2">{{ $recipe->description ?? '' }}</p>
              </div>
              <div class="flex flex-wrap gap-2 pt-3 px-3">
                @if($recipe->cuisine)
                <span class="badge badge-secondary badge-sm">{{ $recipe->cuisine->label() }}</span>
                @endif
              </div>
            </a>
            @endforeach
          </div>
        </div>
      </section>

    </div>
  </main>
@endsection