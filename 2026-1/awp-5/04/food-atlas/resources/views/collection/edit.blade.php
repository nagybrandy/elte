@extends('layout.layout')

@section('title', 'Food Atlas - Edit Collection')

@php 
    $collection = $collection ?? null;
    $title = $collection ? 'Edit Collection: '.$collection->name : 'Create Collection';
    $action = $collection ? route('collections.update', $collection->id) : route('collections.store');
@endphp

@section('content')
<main class="py-16 lg:py-24">
    <div class="container mx-auto px-4 lg:px-8 max-w-4xl">
      <!-- HEADER -->
      <div class="mb-10">
        <h1 class="text-3xl lg:text-4xl font-bold font-serif mb-2">{{ $title }}</h1>
        <p class="text-base-content/70">Create a collection of recipes</p>
      </div>

      <!-- FORM -->
      <form class="space-y-8" action="{{ $action }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method($collection ? 'PUT' : 'POST')
        <!-- BASIC INFORMATION -->
        <div class="card bg-base-200 border border-base-300 shadow-lg">
          <div class="card-body">
            <h2 class="card-title font-serif mb-6">Basic Information</h2>
            
            <div class="form-control w-full mb-4">
              <label class="label" for="collection-name">
                <span class="label-text font-medium">Collection Name*</span>
              </label>
              <input type="text" id="collection-name" value="{{ $collection->name ?? '' }}" name="name" placeholder="e.g., Breakfast" class="input input-bordered w-full" required />
            </div>

            <div class="form-control w-full mb-4">
              <label class="label block mb-2" for="collection-description">
                <span class="label-text font-medium">Description*</span>
              </label>
              <textarea id="collection-description" value="{{ $collection->description ?? '' }}" name="description" placeholder="Write a detailed description of your collection. Include what makes it special, the recipes, and any helpful context for cooks..." class="textarea textarea-bordered w-full min-h-32 text-base leading-relaxed block" rows="6" maxlength="500" required> {{ $collection->description ?? '' }}</textarea>
              <div class="label pt-1 pb-0">
                <span class="label-text-alt text-base-content/60" id="char-count">0 / 500 characters</span>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="form-control w-full">
                <label class="label" for="collection-image">
                  <span class="label-text font-medium">Collection Image URL</span>
                </label>
                <input type="url" id="collection-image" value="{{ $collection->image ?? '' }}" name="image" placeholder="https://example.com/image.jpg" class="input input-bordered w-full" />

                <label class="label">
                  <span class="label-text-alt">Or upload an image file</span>
                </label>
                <input type="file" accept="image/*" name="image_file" class="file-input file-input-bordered w-full" />
              </div>
              
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="form-control w-full">
                <label class="label" for="collection-tags">
                  <span class="label-text font-medium">Tags *</span>
                </label>
                <input type="text" id="collection-tags" value="{{ $collection->tags ?? '' }}" name="tags" placeholder="e.g., Italian, Pasta, Carbonara" class="input input-bordered w-full" required />
              </div>
            </div>

           
        </div>




        <!-- ACTION BUTTONS -->
        <div class="flex flex-col sm:flex-row gap-4 justify-end">
 
          <button type="submit" class="btn btn-primary">{{ $collection ? 'Update Collection' : 'Create Collection' }}</button>
        </div>
      </form>
    </div>
  </main>

@endsection