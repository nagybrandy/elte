@extends('layout.layout')

@section('title', 'Food Atlas - Edit Recipe')

@php 
    $recipe = $recipe ?? null;
    $title = $recipe ? 'Edit Recipe: '.$recipe->title : 'Create Recipe';
    $action = $recipe ? route('recipes.update', $recipe->id) : route('recipes.store');
@endphp

@section('content')
<main class="py-16 lg:py-24">
    <div class="container mx-auto px-4 lg:px-8 max-w-4xl">
      <!-- HEADER -->
      <div class="mb-10">
        <h1 class="text-3xl lg:text-4xl font-bold font-serif mb-2">{{ $title }}</h1>
        <p class="text-base-content/70">Share your culinary creations with the world</p>
      </div>

      <!-- FORM -->
      <form class="space-y-8" action="{{ $action }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method($recipe ? 'PUT' : 'POST')
        <!-- BASIC INFORMATION -->
        <div class="card bg-base-200 border border-base-300 shadow-lg">
          <div class="card-body">
            <h2 class="card-title font-serif mb-6">Basic Information</h2>
            
            <div class="form-control w-full mb-4">
              <label class="label" for="recipe-title">
                <span class="label-text font-medium">Recipe Title*</span>
              </label>
              <input type="text" id="recipe-title" value="{{ $recipe->title ?? '' }}" name="title" placeholder="e.g., Creamy Carbonara Pasta" class="input input-bordered w-full" required />
            </div>

            <div class="form-control w-full mb-4">
              <label class="label block mb-2" for="recipe-description">
                <span class="label-text font-medium">Description*</span>
              </label>
              <textarea id="recipe-description" value="{{ $recipe->description ?? '' }}" name="description" placeholder="Write a detailed description of your recipe. Include what makes it special, the flavors, and any helpful context for cooks..." class="textarea textarea-bordered w-full min-h-32 text-base leading-relaxed block" rows="6" maxlength="500" required> {{ $recipe->description ?? '' }}</textarea>
              <div class="label pt-1 pb-0">
                <span class="label-text-alt text-base-content/60" id="char-count">0 / 500 characters</span>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="form-control w-full">
                <label class="label" for="prep-time">
                  <span class="label-text font-medium">Prep Time (minutes) *</span>
                </label>
                <input type="number" id="prep-time" value="{{ $recipe->prep ?? '' }}" name="prep" placeholder="10" class="input input-bordered w-full" required />
              </div>
              <div class="form-control w-full">
                <label class="label" for="cook-time">
                  <span class="label-text font-medium">Cook Time (minutes) *</span>
                </label>
                <input type="number" id="cook-time" value="{{ $recipe->cook ?? '' }}" name="cook" placeholder="20" class="input input-bordered w-full" required />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="form-control w-full">
                <label class="label" for="servings">
                  <span class="label-text font-medium">Servings *</span>
                </label>
                <input type="number" id="servings" value="{{ $recipe->servings ?? '' }}" name="servings" placeholder="4" class="input input-bordered w-full" required />
              </div>
            </div>

            <div class="form-control w-full mb-4">
              <label class="label" for="recipe-image">
                <span class="label-text font-medium">Recipe Image URL</span>
              </label>
              <input type="url" id="recipe-image" value="{{ $recipe->image ?? '' }}" name="image" placeholder="https://example.com/image.jpg" class="input input-bordered w-full" />
              <label class="label">
                <span class="label-text-alt">Or upload an image file</span>
              </label>
              <input type="file" accept="image/*" name="image_file" class="file-input file-input-bordered w-full" />
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title font-serif mb-6">Tags</h2>
            <input type="text" id="tags" value="{{ $recipe->tags ?? '' }}" name="tags" placeholder="e.g., Italian, Pasta, Carbonara" class="input input-bordered w-full" />
          </div>
        </div>




        <!-- ACTION BUTTONS -->
        <div class="flex flex-col sm:flex-row gap-4 justify-end">
 
          <button type="submit" class="btn btn-primary">{{ $recipe ? 'Update Recipe' : 'Create Recipe' }}</button>
        </div>
      </form>
    </div>
  </main>

@endsection