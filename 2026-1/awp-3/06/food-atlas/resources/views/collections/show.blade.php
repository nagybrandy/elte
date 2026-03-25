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
            @if ($collection->tags)
              @foreach (explode(',', $collection->tags) as $tag)
                <span class="badge badge-secondary">{{ $tag }}</span>
              @endforeach
            @endif
          </div>
          <h1 class="font-serif text-3xl lg:text-4xl font-bold mb-4">{{ $collection->title }}</h1>
          <p class="text-base-content/80 leading-relaxed mb-6">{{ $collection->description }}</p>


          <div class="flex flex-wrap gap-2">
            <a href="{{ route('collections.index') }}" class="btn btn-accent btn-sm">
              Back to Collections
            </a>
            <a href="{{ route('collections.edit', $collection->id) }}" class="btn btn-outline btn-sm">
              Edit Collection
            </a>
            <form action="{{ route('collections.destroy', $collection->id) }}" method="POST">
              @csrf
              @method('DELETE')
              <button type="submit" class="btn btn-error btn-sm">
                Delete Recipe
              </button>
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
        <div class="lg:col-span-2 space-y-8">
          <section>
            <h2 class="font-serif text-2xl font-bold mb-6">Instructions</h2>
            <ul class="steps steps-vertical">
              <li class="step step-primary" data-content="1">
                <div>
                  <h3 class="font-semibold text-lg mb-2">Prepare the egg mixture</h3>
                  <p class="text-base-content/80">In a medium bowl, whisk together the egg yolks, whole eggs, finely grated Pecorino Romano, and Parmigiano-Reggiano until smooth and creamy. Add about 1 teaspoon of freshly cracked black pepper. Set aside.</p>
                </div>
              </li>
              <li class="step step-primary" data-content="2">
                <div>
                  <h3 class="font-semibold text-lg mb-2">Cook the guanciale</h3>
                  <p class="text-base-content/80">Cut the guanciale into small strips or cubes. Place them in a cold, large skillet, then turn the heat to medium. Cook slowly for 8-10 minutes until golden and crispy. Remove from heat and set aside, reserving the rendered fat.</p>
                </div>
              </li>
              <li class="step step-primary" data-content="3">
                <div>
                  <h3 class="font-semibold text-lg mb-2">Boil the pasta</h3>
                  <p class="text-base-content/80">Bring a large pot of well-salted water to a rolling boil. Add the spaghetti and cook until just short of al dente. Before draining, reserve at least 2 cups of the starchy pasta water.</p>
                </div>
              </li>
              <li class="step step-primary" data-content="4">
                <div>
                  <h3 class="font-semibold text-lg mb-2">Combine the pasta and guanciale</h3>
                  <p class="text-base-content/80">Return the skillet to medium-low heat. Add the drained pasta and toss well with a splash of pasta water. Toss in the crispy guanciale and mix to combine.</p>
                </div>
              </li>
              <li class="step step-primary" data-content="5">
                <div>
                  <h3 class="font-semibold text-lg mb-2">Create the creamy sauce</h3>
                  <p class="text-base-content/80">Remove the pan from heat entirely. Wait about 30 seconds. Pour the egg and cheese mixture over the pasta and toss vigorously, adding small splashes of reserved pasta water as needed, until every strand is coated in a glossy, silky sauce.</p>
                </div>
              </li>
              <li class="step step-primary" data-content="6">
                <div>
                  <h3 class="font-semibold text-lg mb-2">Serve immediately</h3>
                  <p class="text-base-content/80">Divide among warmed bowls. Finish with extra Pecorino Romano and freshly cracked black pepper. Serve immediately while the sauce is hot and creamy.</p>
                </div>
              </li>
            </ul>
          </section>

          <!-- TIPS -->
          <div class="alert border border-base-300 bg-base-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-primary shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <div>
              <h3 class="font-bold mb-2">Chef's Tips</h3>
              <ul class="list-disc list-inside space-y-1 text-sm text-base-content/80">
                <li>Use guanciale for the most authentic flavor. Pancetta is a good substitute.</li>
                <li>Remove the pan from heat before adding the egg mixture to avoid scrambling.</li>
                <li>Always reserve plenty of pasta water—the starch creates the silky sauce.</li>
                <li>Use freshly grated cheese, never pre-grated.</li>
                <li>Traditional carbonara has no cream—the creaminess comes from eggs, cheese, and pasta water.</li>
              </ul>
            </div>
          </div>

          <!-- NUTRITION -->
          <div class="card bg-base-200 border border-base-300">
            <div class="card-body">
              <h3 class="card-title font-serif">Nutrition per Serving</h3>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                <div class="bg-base-100 rounded-lg p-3 text-center">
                  <span class="block font-bold text-lg">580</span>
                  <span class="text-xs text-base-content/60 uppercase tracking-wide">Calories</span>
                </div>
                <div class="bg-base-100 rounded-lg p-3 text-center">
                  <span class="block font-bold text-lg">28g</span>
                  <span class="text-xs text-base-content/60 uppercase tracking-wide">Protein</span>
                </div>
                <div class="bg-base-100 rounded-lg p-3 text-center">
                  <span class="block font-bold text-lg">65g</span>
                  <span class="text-xs text-base-content/60 uppercase tracking-wide">Carbs</span>
                </div>
                <div class="bg-base-100 rounded-lg p-3 text-center">
                  <span class="block font-bold text-lg">22g</span>
                  <span class="text-xs text-base-content/60 uppercase tracking-wide">Fat</span>
                </div>
              </div>
            </div>
          </div>
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