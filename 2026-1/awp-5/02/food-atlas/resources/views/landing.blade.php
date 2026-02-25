@extends('layout.layout')

@section('title', 'Food Atlas - Discover World Cuisines')

@section('content')
  <main>

    <!-- HERO -->
    <div class="hero min-h-[650px] lg:min-h-[700px] relative overflow-hidden">
      <div class="hero-overlay bg-gradient-to-r from-base-content/95 via-base-content/80 to-base-content/55"></div>
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80" alt="Delicious food spread" class="brightness-50 opacity-80 absolute inset-0 w-full h-full object-cover" />
      <div class="hero-content text-left text-primary-content relative z-10 container mx-auto px-4 lg:px-8 py-28 lg:py-40">
        <div class="max-w-2xl">
          <div class="badge badge-primary badge-lg mb-6 px-4 py-2 text-primary-content border-0 shadow-lg">{{ $heroMessage }}</div>
          <h1 class="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight">Discover Recipes from Every Corner of the World</h1>
          <p class="mb-10 text-lg lg:text-xl opacity-90 leading-relaxed">Explore, create, and organize your favorite recipes. From Italian pasta to Japanese ramen, Food Atlas brings global cuisines to your kitchen.</p>
          <div class="flex flex-wrap gap-4">
            <a href="recipes.html" class="btn btn-accent btn-lg shadow-lg transition-all">
              Browse Recipes
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#" class="btn btn-outline btn-lg text-primary-content border-primary-content/40 hover:bg-primary-content/15 hover:border-primary-content/60 shadow-lg hover:shadow-xl transition-all">Create Your Own</a>
          </div>
        </div>
      </div>
    </div>

    <!-- FEATURED RECIPES -->
    <section class="py-16 lg:py-24">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex items-end justify-between mb-12">
          <div>
            <div class="badge badge-accent badge-lg mb-3 px-3 py-1">Featured</div>
            <h2 class="text-3xl lg:text-4xl font-bold font-serif">Popular Recipes</h2>
          </div>
          <a href="recipes.html" class="btn btn-ghost hidden sm:inline-flex hover:bg-base-200">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          @foreach ($recipes as $recipe)
          <!-- Card 1 -->
          <a href="{{ $recipe['url'] }}" class="card bg-base-200 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-primary/30 group">
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
        <div class="flex justify-center mt-8 sm:hidden">
          <a href="recipes.html" class="btn btn-outline hover:bg-base-200">
            View all recipes
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- FEATURED COLLECTIONS -->
    <section class="py-16 lg:py-24 bg-base-200/50">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex items-end justify-between mb-12">
          <div>
            <div class="badge badge-accent badge-lg mb-3 px-3 py-1">Curated</div>
            <h2 class="text-3xl lg:text-4xl font-bold font-serif">Featured Collections</h2>
          </div>
          <a href="collections.html" class="btn btn-ghost hidden sm:inline-flex hover:bg-base-200">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <a href="#" class="card bg-base-200 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-primary/30 group">
            <figure class="aspect-[3/2] relative overflow-hidden rounded-t-2xl">
              <img src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80" alt="Holiday Baking" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-base-content/70 to-transparent"></div>
              <div class="badge badge-primary badge-sm absolute bottom-4 left-4 text-primary-content border-0 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                8 recipes
              </div>
            </figure>
            <div class="card-body p-5">
              <h3 class="card-title font-serif text-lg group-hover:text-primary transition-colors">Holiday Baking</h3>
              <p class="text-sm text-base-content/70 line-clamp-2">A collection of festive recipes perfect for the holiday season.</p>
            </div>
          </a>

          <a href="#" class="card bg-base-200 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-primary/30 group">
            <figure class="aspect-[3/2] relative overflow-hidden rounded-t-2xl">
              <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80" alt="Quick Weeknight Dinners" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-base-content/70 to-transparent"></div>
              <div class="badge badge-primary badge-sm absolute bottom-4 left-4 text-primary-content border-0 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                12 recipes
              </div>
            </figure>
            <div class="card-body p-5">
              <h3 class="card-title font-serif text-lg group-hover:text-primary transition-colors">Quick Weeknight Dinners</h3>
              <p class="text-sm text-base-content/70 line-clamp-2">Delicious meals you can prepare in 30 minutes or less.</p>
            </div>
          </a>

          <a href="#" class="card bg-base-200 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-primary/30 group">
            <figure class="aspect-[3/2] relative overflow-hidden rounded-t-2xl">
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80" alt="Healthy Bowls and Salads" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-base-content/70 to-transparent"></div>
              <div class="badge badge-primary badge-sm absolute bottom-4 left-4 text-primary-content border-0 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                10 recipes
              </div>
            </figure>
            <div class="card-body p-5">
              <h3 class="card-title font-serif text-lg group-hover:text-primary transition-colors">Healthy Bowls & Salads</h3>
              <p class="text-sm text-base-content/70 line-clamp-2">Nutritious and colorful bowls and salads for a balanced lifestyle.</p>
            </div>
          </a>

          <a href="#" class="card bg-base-200 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-primary/30 group">
            <figure class="aspect-[3/2] relative overflow-hidden rounded-t-2xl">
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80" alt="World Street Food" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-base-content/70 to-transparent"></div>
              <div class="badge badge-primary badge-sm absolute bottom-4 left-4 text-primary-content border-0 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                15 recipes
              </div>
            </figure>
            <div class="card-body p-5">
              <h3 class="card-title font-serif text-lg group-hover:text-primary transition-colors">World Street Food</h3>
              <p class="text-sm text-base-content/70 line-clamp-2">Explore the best street food recipes from around the globe.</p>
            </div>
          </a>

        </div>
        <div class="flex justify-center mt-8 sm:hidden">
          <a href="collections.html" class="btn btn-outline hover:bg-base-200">
            View all collections
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- FEATURES / CTA -->
    <section class="py-16 lg:py-24">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold font-serif mb-4">Your Kitchen, Your Rules</h2>
          <p class="max-w-2xl mx-auto text-base lg:text-lg text-neutral-content">
            Food Atlas gives you the tools to manage every recipe in your repertoire. Start building your personal cookbook today.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          <div class="card bg-base-200 border border-base-300 shadow-lg hover:shadow-xl transition-all text-center">
            <div class="card-body items-center p-6">
              <div class="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"/><path d="M6 17h12"/></svg>
              </div>
              <h3 class="card-title font-serif justify-center text-xl">Create Recipes</h3>
              <p class="text-sm text-base-content/70">Easily add your own recipes with ingredients, instructions, prep times, and beautiful photos.</p>
            </div>
          </div>

          <div class="card bg-base-200 border border-base-300 shadow-lg hover:shadow-xl transition-all text-center">
            <div class="card-body items-center p-6">
              <div class="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h3 class="card-title font-serif justify-center text-xl">Explore Cuisines</h3>
              <p class="text-sm text-base-content/70">Discover dishes from every corner of the globe, from Thai street food to French pastries.</p>
            </div>
          </div>

          <div class="card bg-base-200 border border-base-300 shadow-lg hover:shadow-xl transition-all text-center">
            <div class="card-body items-center p-6">
              <div class="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3 class="card-title font-serif justify-center text-xl">Build Collections</h3>
              <p class="text-sm text-base-content/70">Organize your favorites into custom collections for meal planning, holidays, and more.</p>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <a href="#" class="btn btn-primary btn-lg shadow-lg hover:shadow-xl transition-all">Get Started for Free</a>
        </div>
      </div>
    </section>

  </main>
@endsection