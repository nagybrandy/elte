@extends('layout.layout')

@section('title', 'FoodAtlas - Collection')

@section('content')

<main class="py-8 lg:py-12">
    <div class="container mx-auto px-4 lg:px-8 max-w-6xl">

      <!-- BREADCRUMB -->
      <nav class="breadcrumbs text-sm text-base-content/70 mb-8 px-0" aria-label="Breadcrumb">
        <ul>
          <li><a href="{{ route('collections.index') }}" class="hover:text-primary">Home</a></li>
          <li><a href="{{ route('collections.index') }}" class="hover:text-primary">Collections</a></li>
          <li class="text-base-content font-medium">{{ $collection->title }}</li>
        </ul>
      </nav>

      <!-- RECIPE HERO -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-12 border-b border-base-300">
        <figure class="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
          <img src="{{ $collection->image }}" alt="{{ $collection->title }}" class="w-full h-full object-cover" />
        </figure>
        <div>
          <div class="flex flex-wrap gap-2 mb-4">
            @if ($collection->cuisine)
              <span class="badge badge-primary">{{ $collection->cuisine->label() }}</span>
            @endif
            @if ($collection->tags)
              @foreach (explode(',', $collection->tags) as $tag)
                <span class="badge badge-secondary">{{ $tag }}</span>
              @endforeach
            @endif
          </div>
          <h1 class="font-serif text-3xl lg:text-4xl font-bold mb-4">{{ $collection->title }}</h1>
          <p class="text-base-content/80 leading-relaxed mb-6">By {{ $collection->user->name ?? 'Unknown' }}</p>
          <p class="text-base-content/80 leading-relaxed mb-6">{{ $collection->description }}</p>


          <div class="flex flex-wrap gap-2">
            <a href="{{ route('collections.index') }}" class="btn btn-accent btn-sm">
              Back to Collections
            </a>
            @can('update', $collection)
            <a href="{{ route('collections.edit', $collection->id) }}" class="btn btn-outline btn-sm">
              Edit Collection
            </a>
            <form action="{{ route('collections.destroy', $collection->id) }}" method="POST">
              @csrf
              @method('DELETE')
              <button type="submit" class="btn btn-error btn-sm">
                Delete Recipe
              </button>
              @endcan
            </form>
          </div>
        </div>
      </section>

      <!-- RECIPE BODY -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 pt-12">
        <!-- INGREDIENTS -->
        <aside class="lg:col-span-1">
          <div class="card bg-base-200 shadow-lg border border-base-300 sticky top-24">
            <div class="card-body">
              <h2 class="card-title font-serif">Ingredients</h2>
              <p class="text-sm text-base-content/70 mb-4">Click to check off as you go</p>
              <ul class="space-y-3" id="ingredientsList">
                <li class="flex items-center gap-3 py-2 border-b border-base-300">
                  <input type="checkbox" class="checkbox checkbox-sm checkbox-primary" />
                  <span><strong>400g</strong> Spaghetti <span class="block text-xs text-base-content/60">or rigatoni</span></span>
                </li>
                <li class="flex items-center gap-3 py-2 border-b border-base-300">
                  <input type="checkbox" class="checkbox checkbox-sm checkbox-primary" />
                  <span><strong>200g</strong> Guanciale <span class="block text-xs text-base-content/60">or pancetta</span></span>
                </li>
                <li class="flex items-center gap-3 py-2 border-b border-base-300">
                  <input type="checkbox" class="checkbox checkbox-sm checkbox-primary" />
                  <span><strong>4 large</strong> Egg yolks <span class="block text-xs text-base-content/60">plus 2 whole eggs</span></span>
                </li>
                <li class="flex items-center gap-3 py-2 border-b border-base-300">
                  <input type="checkbox" class="checkbox checkbox-sm checkbox-primary" />
                  <span><strong>100g</strong> Pecorino Romano <span class="block text-xs text-base-content/60">finely grated</span></span>
                </li>
                <li class="flex items-center gap-3 py-2 border-b border-base-300">
                  <input type="checkbox" class="checkbox checkbox-sm checkbox-primary" />
                  <span><strong>50g</strong> Parmigiano-Reggiano <span class="block text-xs text-base-content/60">finely grated</span></span>
                </li>
                <li class="flex items-center gap-3 py-2 border-b border-base-300">
                  <input type="checkbox" class="checkbox checkbox-sm checkbox-primary" />
                  <span><strong>2 tsp</strong> Black pepper <span class="block text-xs text-base-content/60">freshly cracked</span></span>
                </li>
                <li class="flex items-center gap-3 py-2">
                  <input type="checkbox" class="checkbox checkbox-sm checkbox-primary" />
                  <span><strong>to taste</strong> Kosher salt <span class="block text-xs text-base-content/60">for pasta water</span></span>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <!-- INSTRUCTIONS -->
        <div class="lg:col-span-2 space-y-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          @if ($collection->recipes->count() > 0)
          @else
          <div class="card bg-base-200 shadow-lg border border-base-300">
            <div class="card-body">
              <h2 class="card-title font-serif">No recipes found</h2>
            </div>
          </div>
          @endif
          @if ($collection->recipes->count() > 0) 
          @foreach ($collection->recipes as $recipe)
            <a href="{{ route('recipes.show', $recipe->id) }}" class="card bg-base-200 shadow-lg hover:shadow-2xl transition-all border border-base-300 hover:border-primary/30 group">
              <figure class="aspect-[4/3] overflow-hidden rounded-t-2xl">
                <img src="{{ $recipe->image }}" alt="{{ $recipe->title }}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </figure>
            </a>
            <div class="card-body p-5">
              <h3 class="card-title font-serif text-lg group-hover:text-primary">{{ $recipe->title }}</h3>
              <p class="text-sm text-base-content/70 line-clamp-2">{{ $recipe->description }}</p>
              <div class="flex gap-4 text-xs text-base-content/60 mt-2">
                <span>{{ $recipe->prep }} min</span>
                <span>{{ $recipe->cook }} min</span>
              </div>
            </div>
          @endforeach
          @endif
        </div>
      </div>

      <!-- RELATED RECIPES -->
      <section class="mt-16 pt-12 border-t border-base-300">
        <h2 class="font-serif text-2xl font-bold mb-8">You Might Also Like</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="#" class="card bg-base-200 shadow-lg hover:shadow-2xl transition-all border border-base-300 hover:border-primary/30 group">
            <figure class="aspect-[4/3] overflow-hidden rounded-t-2xl">
              <img src="https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80" alt="Mediterranean Salad" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </figure>
            <div class="card-body p-5">
              <h3 class="card-title font-serif text-lg group-hover:text-primary">Mediterranean Salad</h3>
              <p class="text-sm text-base-content/70 line-clamp-2">A vibrant salad with tomatoes, olives, feta, and zesty lemon dressing.</p>
              <div class="flex gap-4 text-xs text-base-content/60 mt-2">
                <span>10 min</span>
                <span>2 servings</span>
              </div>
              <div class="flex gap-2 mt-2">
                <span class="badge badge-sm badge-secondary">healthy</span>
                <span class="badge badge-sm badge-secondary">salad</span>
              </div>
            </div>
          </a>
          <a href="#" class="card bg-base-200 shadow-lg hover:shadow-2xl transition-all border border-base-300 hover:border-primary/30 group">
            <figure class="aspect-[4/3] overflow-hidden rounded-t-2xl">
              <img src="https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80" alt="Chicken Tikka Masala" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </figure>
            <div class="card-body p-5">
              <h3 class="card-title font-serif text-lg group-hover:text-primary">Chicken Tikka Masala</h3>
              <p class="text-sm text-base-content/70 line-clamp-2">Rich and aromatic chicken in a creamy tomato-spiced sauce.</p>
              <div class="flex gap-4 text-xs text-base-content/60 mt-2">
                <span>50 min</span>
                <span>4 servings</span>
              </div>
              <div class="flex gap-2 mt-2">
                <span class="badge badge-sm badge-secondary">indian</span>
                <span class="badge badge-sm badge-secondary">curry</span>
              </div>
            </div>
          </a>
          <a href="#" class="card bg-base-200 shadow-lg hover:shadow-2xl transition-all border border-base-300 hover:border-primary/30 group">
            <figure class="aspect-[4/3] overflow-hidden rounded-t-2xl">
              <img src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&q=80" alt="Street-Style Tacos" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </figure>
            <div class="card-body p-5">
              <h3 class="card-title font-serif text-lg group-hover:text-primary">Street-Style Tacos</h3>
              <p class="text-sm text-base-content/70 line-clamp-2">Authentic Mexican street tacos with seasoned meat and fresh salsa.</p>
              <div class="flex gap-4 text-xs text-base-content/60 mt-2">
                <span>25 min</span>
                <span>6 servings</span>
              </div>
              <div class="flex gap-2 mt-2">
                <span class="badge badge-sm badge-secondary">mexican</span>
                <span class="badge badge-sm badge-secondary">tacos</span>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  </main>
@endsection