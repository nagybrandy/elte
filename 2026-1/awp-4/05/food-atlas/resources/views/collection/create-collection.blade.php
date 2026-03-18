@extends('layouts.layout')

@section('title', 'Food Atlas - Create Collection')

@section('content')

<main class="py-16 lg:py-24">
    <div class="container mx-auto px-4 lg:px-8 max-w-4xl">
      <!-- HEADER -->
      <div class="mb-10">
        <h1 class="text-3xl lg:text-4xl font-bold font-serif mb-2">{{ $collection->title ? 'Edit Collection: ' . $collection->title : 'Create Collection' }}</h1>
        <p class="text-base-content/70">Share your culinary creations with the world</p>
      </div>

      <!-- FORM -->
      <form class="space-y-8" action="{{ isset($collection) && $collection->id ? route('collections.update', $collection->id) : route('collections.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        @if(isset($collection) && $collection->id)
          @method('PUT')
        @endif
        <!-- BASIC INFORMATION -->
        <div class="card bg-base-200 border border-base-300 shadow-lg">
          <div class="card-body">
            <h2 class="card-title font-serif mb-6">Basic Information</h2>
            
            <div class="form-control w-full mb-4">
              <label class="label" for="recipe-title">
                <span class="label-text font-medium">Recipe Title *</span>
              </label>
              <input type="text" id="title" name="title" value="{{ $collection->title ?? '' }}" placeholder="e.g., Creamy Carbonara Pasta" class="input input-bordered w-full" required />
            </div>
            <div class="form-control w-full mb-4">
              <label class="label block mb-2" for="recipe-description">
                <span class="label-text font-medium">Description *</span>
              </label>
                <textarea id="recipe-description" name="description" placeholder="Write a detailed description of your recipe. Include what makes it special, the flavors, and any helpful context for cooks..." class="textarea textarea-bordered w-full min-h-32 text-base leading-relaxed block" rows="6" maxlength="500" required>{{ $collection->description ?? '' }}</textarea>
              <div class="label pt-1 pb-0">
                <span class="label-text-alt text-base-content/60" id="char-count">0 / 500 characters</span>
              </div>
            </div>


            <div class="form-control w-full mb-4">
              <label class="label" for="recipe-image">
                <span class="label-text font-medium">Collection Image URL</span>
              </label>
              @if($collection->image_file)
                <img src="{{ asset('storage/' . $collection->image_file) }}" alt="Collection Image" class="w-full h-auto" />
              @endif
              <input type="file" accept="image/*" name="image_file" value="{{ old('image_file') }}" class="file-input file-input-bordered w-full" />
            </div>
          </div>
        </div>

        <!-- CATEGORIES AND TAGS -->
        <div class="card bg-base-200 border border-base-300 shadow-lg">
          <div class="card-body">
            <h2 class="card-title font-serif mb-6">Tags</h2>
            
            <div class="form-control w-full mb-4">
              <label class="label" for="tags">
                <span class="label-text font-medium">Tags (comma-separated)</span>
              </label>
              <input type="text" id="tags" name="tags" value="{{ $recipe->tags ?? old('tags') }}" placeholder="pasta, italian, quick, vegetarian" class="input input-bordered w-full" />
              <label class="label">
                <span class="label-text-alt">Add tags to help users find your recipe</span>
              </label>
            </div>

        <!-- ACTION BUTTONS -->
        <div class="flex flex-col sm:flex-row gap-4 justify-end">
          <a href="{{ route('recipes.index') }}" class="btn btn-outline">Cancel</a>
          <button type="submit" class="btn btn-primary">Save Recipe</button>
        </div>
      </form>
    </div>
  </main>
@endsection