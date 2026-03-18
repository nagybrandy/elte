
@extends('layouts.layout')

@section('title', 'Food Atlas - Edit Recipe')

@section('content')
  <main class="py-8 lg:py-12">
    <div class="container mx-auto px-4 lg:px-8 max-w-6xl">

      <!-- BREADCRUMB -->
      <nav class="breadcrumbs text-sm text-base-content/70 mb-8 px-0" aria-label="Breadcrumb">
        <ul>
          <li><a href="{{ route('landing') }}" class="hover:text-primary">Home</a></li>
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
            @foreach (explode(',', $recipe->tags) as $tag)
              <span class="badge badge-secondary">{{ $tag }}</span>
            @endforeach
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
              <div class="stat-value text-lg">{{ $recipe->prep }} min</div>
            </div>
            <div class="stat py-4 min-w-0">
              <div class="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v10l4.24 4.24"/><circle cx="12" cy="12" r="10"/></svg>
              </div>
              <div class="stat-title">Cook</div>
              <div class="stat-value text-lg">{{ $recipe->cook }} min</div>
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
            <button class="btn btn-accent btn-sm" onclick="window.location.href='{{ route('recipes.edit', $recipe->id) }}'">
              Edit
            </button>
            <form action="{{ route('recipes.destroy', $recipe->id) }}" method="POST">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-error btn-sm hover:text-primary" onclick="return confirm('Are you sure you want to delete this recipe?')">Delete</button>
          </form>
          </div>
        </div>
      </section>

    </div>
  </main>
@endsection