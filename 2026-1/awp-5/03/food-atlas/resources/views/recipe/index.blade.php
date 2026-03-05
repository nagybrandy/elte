@extends('layout.layout')

@section('title', 'Food Atlas - Recipes')

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

      <!-- RECIPE GRID -->
      @if($recipes->isEmpty())
        <div class="card bg-base-200 border border-base-300 shadow-md">
          <div class="card-body items-center text-center py-16">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-base-content/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h2 class="card-title font-serif text-xl text-base-content/80">No recipes yet</h2>
            <p class="text-base-content/60 max-w-md">Recipes you add or import will appear here.</p>
          </div>
        </div>
      @else
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          @foreach ($recipes as $recipe)
          <a href="{{ route('recipes.show', $recipe) }}" class="card bg-base-200 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-primary/30 group focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-2xl">
            <figure class="aspect-[4/3] overflow-hidden rounded-t-2xl bg-base-300">
              @if($recipe->image)
                <img src="{{ $recipe->image }}" alt="{{ $recipe->title }}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              @else
                <div class="w-full h-full flex items-center justify-center text-base-content/30" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
              @endif
            </figure>
            <div class="card-body p-5">
              <h3 class="card-title font-serif text-lg group-hover:text-primary transition-colors line-clamp-2">{{ $recipe->title }}</h3>
              <p class="text-sm text-base-content/70 line-clamp-2">{{ $recipe->description ?? '' }}</p>
              @php $tagList = $recipe->tags ?? []; @endphp
              @if(count($tagList) > 0)
                <div class="flex flex-wrap gap-2 pt-3">
                  @foreach ($tagList as $tag)
                  <span class="badge badge-secondary badge-sm">{{ $tag }}</span>
                  @endforeach
                </div>
              @endif
            </div>
          </a>
          @endforeach
        </div>

        <!-- PAGINATION -->
        <div class="flex justify-center mt-12">
          {{ $recipes->withQueryString()->links() }}
        </div>
      @endif
    </div>
  </main>
@endsection