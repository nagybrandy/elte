@extends('layouts.layout')

@section('title', 'Food Atlas - Edit Recipe')

@section('content')

<main class="py-16 lg:py-24">
    <div class="container mx-auto px-4 lg:px-8">
      <h1 class="text-3xl lg:text-4xl font-bold font-serif mb-10">All Recipes</h1>

      <!-- FILTERS -->
      <div class="card bg-base-200 border border-base-300 shadow-md mb-12">
        <div class="card-body p-6">
          <div class="flex flex-col lg:flex-row gap-4 items-center">
            <input type="text" placeholder="Search recipes…" class="input input-bordered flex-1 w-full h-12" />
            <select class="select select-bordered w-full lg:w-auto h-12">
              <option disabled selected>Cuisine</option>
              <option>Italian</option>
              <option>Mexican</option>
              <option>Indian</option>
              <option>Mediterranean</option>
              <option>Japanese</option>
            </select>
            <select class="select select-bordered w-full lg:w-auto h-12">
              <option disabled selected>Category</option>
              <option>Main Dish</option>
              <option>Dessert</option>
              <option>Salad</option>
              <option>Soup</option>
              <option>Baking</option>
            </select>
            <select class="select select-bordered w-full lg:w-auto h-12">
              <option disabled selected>Time</option>
              <option>Under 30 min</option>
              <option>30-60 min</option>
              <option>Over 60 min</option>
            </select>
            <button class="btn btn-primary btn-square h-12 w-12">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
          </div>
        </div>
      </div>

      @if (session('success'))
        <div class="alert alert-success">
          {{ session('success') }}
        </div>
      @endif
      @if (session('error'))
        <div class="alert alert-error">
          {{ session('error') }}
        </div>
      @endif
      <!-- RECIPE GRID -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      @foreach ($recipes as $recipe)
          <!-- Card 6 -->
          <a href="{{ route('recipes.show', $recipe->id) }}" class="card bg-base-200 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-primary/30 group">
            <figure class="aspect-[4/3] overflow-hidden rounded-t-2xl">
              <img src="{{ $recipe['image'] }}" alt="{{ $recipe['title'] }}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </figure>
            <div class="card-body p-5">
              <h3 class="card-title font-serif text-lg group-hover:text-primary transition-colors">{{ $recipe['title'] }}</h3>
              <p class="text-sm text-base-content/70 line-clamp-2">{{ $recipe['description'] }}</p>
              <div class="flex items-center gap-4 mt-auto pt-4 text-xs text-base-content/60">
                <span class="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {{ $recipe['prep'] }}
                </span>
                <span class="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {{ $recipe['cook'] }}
                </span>
                <span class="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  {{ $recipe['servings'] }}
                </span>
              </div>
              <div class="flex flex-wrap gap-2 pt-3">
                @foreach (explode(',', $recipe['tags']) as $tag)
                  <div class="badge badge-secondary badge-sm">{{ $tag }}</div>
                @endforeach
              </div>
            </div>
          </a>
        @endforeach

      </div>

      <!-- PAGINATION -->
      <div class="flex justify-center mt-12">
        <div class="join">
          <button class="join-item btn btn-outline btn-sm">«</button>
          <button class="join-item btn btn-primary btn-sm">1</button>
          <button class="join-item btn btn-outline btn-sm">2</button>
          <button class="join-item btn btn-outline btn-sm">3</button>
          <button class="join-item btn btn-outline btn-sm">»</button>
        </div>
      </div>
    </div>
  </main>
@endsection