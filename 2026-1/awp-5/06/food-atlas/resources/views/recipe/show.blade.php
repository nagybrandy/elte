@extends('layout.layout')

@section('title', 'Food Atlas - Recipe Details')

@section('content')
<main class="py-8 lg:py-12">
    <div class="container mx-auto px-4 lg:px-8 max-w-6xl">

      <!-- BREADCRUMB -->
      <nav class="breadcrumbs text-sm text-base-content/70 mb-8 px-0" aria-label="Breadcrumb">
        <ul>
          <li><a href="{{ route('recipes.index') }}" class="hover:text-primary">Home</a></li>
          <li><a href="{{ route('recipes.index') }}" class="hover:text-primary">Recipes</a></li>
          <li class="text-base-content font-medium">{{ $recipe->title }}</li>
        </ul>
      </nav>

      <!-- RECIPE HERO -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-12 border-b border-base-300">
        <figure class="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
          <img src="{{ $recipe->image_file ? asset('storage/' . $recipe->image_file) : $recipe->image }}" alt="{{ $recipe->title }}" class="w-full h-full object-cover" />
        </figure>
        <div>
          <div class="flex flex-wrap gap-2 mb-4">
            @if($recipe->cuisine)
              <span class="badge badge-secondary">{{ $recipe->cuisine->label() }}</span>
            @endif
            @if($recipe->tags)
                @foreach (explode(',', $recipe->tags) as $tag)
                    <span class="badge badge-outline">{{ $tag }}</span>
                @endforeach
            @endif
          </div>
          <h1 class="font-serif text-3xl lg:text-4xl font-bold mb-4">{{ $recipe->title }}</h1>
          <p class="text-base-content/80 leading-relaxed mb-6">{{ $recipe->description }}</p>

          <!-- STATS -->
          <div class="stats stats-vertical sm:stats-horizontal shadow border border-base-300 bg-base-200 w-full mb-6">
            <div class="stat py-4 min-w-0">
              <div class="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div class="stat-title">Prep</div>
              <div class="stat-value text-lg">{{ $recipe->prep }} mins</div>
            </div>
            <div class="stat py-4 min-w-0">
              <div class="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v10l4.24 4.24"/><circle cx="12" cy="12" r="10"/></svg>
              </div>
              <div class="stat-title">Cook</div>
              <div class="stat-value text-lg">{{ $recipe->cook }} mins</div>
            </div>
            <div class="stat py-4 min-w-0">
              <div class="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div class="stat-title">Servings</div>
              <div class="stat-value text-lg">{{ $recipe->servings }}</div>
            </div>
          </div>

          <div class="flex flex-wrap gap-2">
            <a href="{{ route('recipes.edit', $recipe->id) }}" class="btn btn-outline btn-sm">
              Edit
            </a>
            <form action="{{ route('recipes.destroy', $recipe->id) }}" method="POST">
              @csrf
              @method('DELETE')
              <button type="submit" class="btn btn-outline btn-sm btn-error">
              Delete
            </button>
            </form>
          </div>
        </div>
        <div class="card-body w-6xl">
          <h2 class="card-title font-serif mb-6">Collections</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            @if($recipe->collections->count() > 0)
            @foreach($recipe->collections as $collection)
            <a href="{{ route('collections.show', $collection->id) }}" class="card bg-base-200 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-primary/30 group focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-2xl">
              <figure class="aspect-[4/3] overflow-hidden rounded-t-2xl bg-base-300">
                <img src="{{ $collection->image_file ? asset('storage/' . $collection->image_file) : $collection->image }}" alt="{{ $collection->name }}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </figure>
              <div class="card-body p-5">
                <h3 class="card-title font-serif text-lg group-hover:text-primary transition-colors line-clamp-2">{{ $collection->name }}</h3>
                <p class="text-sm text-base-content/70 line-clamp-2">{{ $collection->description ?? '' }}</p>
              </div>
            </a>
            @endforeach
            @else
            <p class="text-base-content/70">No collections found</p>
            <a href="{{ route('collections.create') }}" class="btn btn-outline btn-sm">
              Create Collection
            </a>
            @endif
          </div>
        </div>
      </section>

    </div>
  </main>
@endsection