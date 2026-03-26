@extends('layout.layout')

@php
    $collection = $collection ?? null;
@endphp
@if ($collection)
    @section('title', 'FoodAtlas - Edit Collection')
@else
    @section('title', 'FoodAtlas - Create Collection')
@endif
@section('content')
<main class="py-16 lg:py-24">
    <div class="container mx-auto px-4 lg:px-8 max-w-4xl">
      <!-- HEADER -->
      <div class="mb-10">
        <h1 class="text-3xl lg:text-4xl font-bold font-serif mb-2">{{ $collection ? 'Edit Collection: ' . $collection->title : 'Create Collection' }}</h1>
        <p class="text-base-content/70">Share your culinary creations with the world</p>
      </div>
      @if ($errors->any())
        <div class="alert alert-error">
          <ul>
            @foreach ($errors->all() as $error)
              <li>{{ $error }}</li>
            @endforeach
          </ul>
        </div>
      @endif
      <!-- FORM -->
      <form class="space-y-8" action="{{ $collection ? route('collections.update', $collection->id) : route('collections.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method($collection ? 'PUT' : 'POST')
        <!-- BASIC INFORMATION -->
        <div class="card bg-base-200 border border-base-300 shadow-lg">
          <div class="card-body">
            <h2 class="card-title font-serif mb-6">Basic Information</h2>
            
            <div class="form-control w-full mb-4">
              <label class="label" for="recipe-title">
                <span class="label-text font-medium">Recipe Title *</span>
              </label>
              <input type="text" name="title" id="recipe-title" placeholder="e.g., Creamy Carbonara Pasta" class="input input-bordered w-full" value="{{ $collection ? $collection->title : '' }}" />
            </div>

            <div class="form-control w-full mb-4">
              <label class="label block mb-2" for="recipe-description">
                <span class="label-text font-medium">Description *</span>
              </label>
              <textarea name="description" id="recipe-description" placeholder="Write a detailed description of your recipe. Include what makes it special, the flavors, and any helpful context for cooks..." class="textarea textarea-bordered w-full min-h-32 text-base leading-relaxed block" rows="6" maxlength="500" >{{ $collection['description'] ?? old('description') }}</textarea>
              <div class="label pt-1 pb-0">
                <span class="label-text-alt text-base-content/60" id="char-count">0 / 500 characters</span>
              </div>
            </div>


            <div class="form-control w-full mb-4">
              <label class="label" for="recipe-image">
                <span class="label-text font-medium">Collection Image URL</span>
              </label>
              <input type="url" name="image" id="recipe-image" placeholder="https://example.com/image.jpg" class="input input-bordered w-full" value="{{ $collection ? $collection->image : '' }}" />
              <label class="label">
                <span class="label-text-alt">Or upload an image file</span>
              </label>
              <input type="file" name="image_file" accept="image/*" class="file-input file-input-bordered w-full" value="{{ $collection ? $collection->image : '' }}" />
            </div>
          </div>
        </div>

        <!-- CATEGORIES AND TAGS -->
        <div class="card bg-base-200 border border-base-300 shadow-lg">
          <div class="card-body">
            <h2 class="card-title font-serif mb-6">Categories & Tags</h2>
            

            <div class="form-control w-full">
              <label class="label" for="tags">
                <span class="label-text font-medium">Tags (comma-separated)</span>
              </label>
              <input type="text" name="tags" id="tags" placeholder="pasta, italian, quick, vegetarian" class="input input-bordered w-full" value="{{ $collection['tags'] ?? old('tags') }}" />
              <label class="label">
                <span class="label-text-alt">Add tags to help users find your recipe</span>
              </label>
            </div>

            <div class="form-control w-full">
            <label class="label" for="recipes">
              <span class="label-text font-medium">Recipes</span>
            </label>
            <div class="flex flex-col gap-2">
                @foreach ($recipes as $recipe)
                <div class="flex flex-row gap-2">
                  <input type="checkbox" name="recipes[]" id="recipes" class="checkbox checkbox-sm checkbox-primary" value="{{ $recipe->id }}" {{ $collection->recipes->contains($recipe->id) ? 'checked' : '' }} />
                  <label for="recipes">{{ $recipe->title }}</label>
                  </div>
                @endforeach
            </div>
          </div>  

          <div class="form-control w-full">
            <label class="label" for="cuisine">
              <span class="label-text font-medium">Cuisine</span>
            </label>
            <select name="cuisine" id="cuisine" class="select select-bordered w-full">
              @foreach ($cuisines as $option)
              <option value="{{ $option['value'] }}" {{ $collection->cuisine == $option['value'] ? 'selected' : '' }}>{{ $option['label'] }}</option>
              @endforeach
            </select>
          </div>

        </div>


        <!-- ACTION BUTTONS -->
        <div class="flex flex-col sm:flex-row gap-4 justify-end">
          <button type="submit" class="btn btn-primary">Publish Collection</button>
        </div>
      </form>
    </div>
  </main>

@endsection