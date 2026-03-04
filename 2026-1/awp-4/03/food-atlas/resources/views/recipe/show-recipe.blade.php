
@extends('layouts.layout')

@section('title', 'Food Atlas - Edit Recipe')

@section('content')
  <main class="py-8 lg:py-12">
    <div class="container mx-auto px-4 lg:px-8 max-w-6xl">

      <!-- BREADCRUMB -->
      <nav class="breadcrumbs text-sm text-base-content/70 mb-8 px-0" aria-label="Breadcrumb">
        <ul>
          <li><a href="index.html" class="hover:text-primary">Home</a></li>
          <li><a href="recipes.html" class="hover:text-primary">Recipes</a></li>
          <li class="text-base-content font-medium">{{ $recipe->title }}</li>
          <li><a href="{{ route('recipes.edit', $recipe->id) }}" class="hover:text-primary">Edit</a></li>
          <form action="{{ route('recipes.destroy', $recipe->id) }}" method="POST">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-error btn-sm hover:text-primary">Delete</button>
          </form>
        </ul>
      </nav>
     
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
      <!-- RECIPE HERO -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-12 border-b border-base-300">
        <figure class="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
          <img src="{{ $recipe->image }}" alt="{{ $recipe->title }}" class="w-full h-full object-cover" />
        </figure>
        <div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="badge badge-secondary">{{ $recipe->tags }}</span>
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
              <div class="stat-value text-lg">{{ $recipe->prep }}</div>
            </div>
            <div class="stat py-4 min-w-0">
              <div class="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v10l4.24 4.24"/><circle cx="12" cy="12" r="10"/></svg>
              </div>
              <div class="stat-title">Cook</div>
              <div class="stat-value text-lg">{{ $recipe->cook }}</div>
            </div>
            <div class="stat py-4 min-w-0">
              <div class="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div class="stat-title">Servings</div>
              <div class="stat-value text-lg">{{ $recipe->servings }}</div>
            </div>
            <div class="stat py-4 min-w-0">
              <div class="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              </div>
              <div class="stat-title">Difficulty</div>
                <div class="stat-value text-lg">{{ $recipe->difficulty }}</div>
            </div>
          </div>

          <div class="flex flex-wrap gap-2">
            <button class="btn btn-accent btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              Save
            </button>
            <button class="btn btn-outline btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
              Share
            </button>
            <button class="btn btn-outline btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
              Print
            </button>
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
              <p class="text-sm text-base-content/70 mb-4">{{ $recipe->ingredients }}</p>
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
                  <p class="font-semibold text-lg mb-2">{{ $recipe->instructions }}</p>
                </div>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  </main>
@endsection