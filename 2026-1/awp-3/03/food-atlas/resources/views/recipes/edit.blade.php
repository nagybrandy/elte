@extends('layout.layout')


@if ($recipe)
    @section('title', 'FoodAtlas - Edit Recipe')
@else
    @section('title', 'FoodAtlas - Create Recipe')
@endif
@section('content')
<main class="py-16 lg:py-24">
    <div class="container mx-auto px-4 lg:px-8 max-w-4xl">
      <!-- HEADER -->
      <div class="mb-10">
        <h1 class="text-3xl lg:text-4xl font-bold font-serif mb-2">{{ $recipe ? 'Edit Recipe: ' . $recipe->title : 'Create Recipe' }}</h1>
        <p class="text-base-content/70">Share your culinary creations with the world</p>
      </div>

      <!-- FORM -->
      <form class="space-y-8" action="{{ $recipe ? route('recipes.update', $recipe->id) : route('recipes.store') }}" method="POST">
        @csrf
        @method($recipe ? 'PUT' : 'POST')
        <!-- BASIC INFORMATION -->
        <div class="card bg-base-200 border border-base-300 shadow-lg">
          <div class="card-body">
            <h2 class="card-title font-serif mb-6">Basic Information</h2>
            
            <div class="form-control w-full mb-4">
              <label class="label" for="recipe-title">
                <span class="label-text font-medium">Recipe Title *</span>
              </label>
              <input type="text" name="title" id="recipe-title" placeholder="e.g., Creamy Carbonara Pasta" class="input input-bordered w-full" value="{{ $recipe ? $recipe->title : '' }}" />
            </div>

            <div class="form-control w-full mb-4">
              <label class="label block mb-2" for="recipe-description">
                <span class="label-text font-medium">Description *</span>
              </label>
              <textarea name="description" id="recipe-description" placeholder="Write a detailed description of your recipe. Include what makes it special, the flavors, and any helpful context for cooks..." class="textarea textarea-bordered w-full min-h-32 text-base leading-relaxed block" rows="6" maxlength="500" value="{{ $recipe ? $recipe->description : '' }}"></textarea>
              <div class="label pt-1 pb-0">
                <span class="label-text-alt text-base-content/60" id="char-count">0 / 500 characters</span>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="form-control w-full">
                <label class="label" for="prep-time">
                  <span class="label-text font-medium">Prep Time (minutes) *</span>
                </label>
                <input type="number" name="prep" id="prep-time" placeholder="10" class="input input-bordered w-full" value="{{ $recipe ? $recipe->prep : '' }}" />
              </div>
              <div class="form-control w-full">
                <label class="label" for="cook-time">
                  <span class="label-text font-medium">Cook Time (minutes) *</span>
                </label>
                <input type="number" name="cook" id="cook-time" placeholder="20" class="input input-bordered w-full" value="{{ $recipe ? $recipe->cook : '' }}" />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="form-control w-full">
                <label class="label" for="servings">
                  <span class="label-text font-medium">Servings *</span>
                </label>
                <input type="number" name="servings" id="servings" placeholder="4" class="input input-bordered w-full" value="{{ $recipe ? $recipe->servings : '' }}" />
              </div>
              <div class="form-control w-full">
                <label class="label" for="difficulty">
                  <span class="label-text font-medium">Difficulty *</span>
                </label>
                <select name="difficulty" id="difficulty" class="select select-bordered w-full" value="{{ $recipe ? $recipe->difficulty : '' }}">
                  <option disabled selected>Select difficulty</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
            </div>

            <div class="form-control w-full mb-4">
              <label class="label" for="recipe-image">
                <span class="label-text font-medium">Recipe Image URL</span>
              </label>
              <input type="url" name="image" id="recipe-image" placeholder="https://example.com/image.jpg" class="input input-bordered w-full" value="{{ $recipe ? $recipe->image : '' }}" />
              <label class="label">
                <span class="label-text-alt">Or upload an image file</span>
              </label>
              <input type="file" name="image" accept="image/*" class="file-input file-input-bordered w-full" value="{{ $recipe ? $recipe->image : '' }}" />
            </div>
          </div>
        </div>

        <!-- CATEGORIES AND TAGS -->
        <div class="card bg-base-200 border border-base-300 shadow-lg">
          <div class="card-body">
            <h2 class="card-title font-serif mb-6">Categories & Tags</h2>
            
            <div class="form-control w-full mb-4">
              <label class="label" for="cuisine">
                <span class="label-text font-medium">Cuisine</span>
              </label>
              <select name="cuisine" id="cuisine" class="select select-bordered w-full">
                <option disabled selected>Select cuisine</option>
                <option>Italian</option>
                <option>Mexican</option>
                <option>Indian</option>
                <option>Mediterranean</option>
                <option>Japanese</option>
                <option>Chinese</option>
                <option>French</option>
                <option>Thai</option>
                <option>American</option>
                <option>Other</option>
              </select>
            </div>

            <div class="form-control w-full mb-4">
              <label class="label" for="category">
                <span class="label-text font-medium">Category</span>
              </label>
              <select name="category" id="category" class="select select-bordered w-full">
                <option disabled selected>Select category</option>
                <option>Main Dish</option>
                <option>Dessert</option>
                <option>Salad</option>
                <option>Soup</option>
                <option>Baking</option>
                <option>Appetizer</option>
                <option>Breakfast</option>
                <option>Snack</option>
                <option>Beverage</option>
              </select>
            </div>

            <div class="form-control w-full">
              <label class="label" for="tags">
                <span class="label-text font-medium">Tags (comma-separated)</span>
              </label>
              <input type="text" name="tags" id="tags" placeholder="pasta, italian, quick, vegetarian" class="input input-bordered w-full" />
              <label class="label">
                <span class="label-text-alt">Add tags to help users find your recipe</span>
              </label>
            </div>
          </div>
        </div>

        <!-- INGREDIENTS -->
        <div class="card bg-base-200 border border-base-300 shadow-lg">
          <div class="card-body">
            <div class="flex justify-between items-center mb-6">
              <h2 class="card-title font-serif">Ingredients</h2>
              <button type="button" class="btn btn-sm btn-primary" onclick="addIngredient()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
                Add Ingredient
              </button>
            </div>
            
            <div id="ingredients-list" class="space-y-3">
              <div class="flex gap-3 items-start">
                <input type="text" name="ingredients" placeholder="Amount (e.g., 400g)" class="input input-bordered flex-1" />
                <input type="text" name="ingredients" placeholder="Ingredient name" class="input input-bordered flex-2" />
                <input type="text" placeholder="Notes (optional)" class="input input-bordered flex-1" />
                <button type="button" class="btn btn-ghost btn-sm btn-square" onclick="removeIngredient(this)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- INSTRUCTIONS -->
        <div class="card bg-base-200 border border-base-300 shadow-lg">
          <div class="card-body">
            <div class="flex justify-between items-center mb-6">
              <h2 class="card-title font-serif">Instructions</h2>
              <button type="button" class="btn btn-sm btn-primary" onclick="addInstruction()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
                Add Step
              </button>
            </div>
            
            <div id="instructions-list" class="space-y-4">
              <div class="flex gap-3">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">1</div>
                <div class="flex-1">
                  <input type="text" placeholder="Step title (optional)" class="input input-bordered w-full mb-2" />
                  <textarea placeholder="Describe this step..." class="textarea textarea-bordered w-full h-24"></textarea>
                </div>
                <button type="button" class="btn btn-ghost btn-sm btn-square self-start" onclick="removeInstruction(this)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- PUBLISH OPTIONS -->
        <div class="card bg-base-200 border border-base-300 shadow-lg">
          <div class="card-body">
            <h2 class="card-title font-serif mb-6">Publish Options</h2>
            
            <div class="form-control mb-4">
              <label class="label cursor-pointer justify-start gap-3">
                <input type="checkbox" class="checkbox checkbox-primary" />
                <span class="label-text">Save as draft</span>
              </label>
            </div>

            <div class="form-control">
              <label class="label cursor-pointer justify-start gap-3">
                <input type="checkbox" class="checkbox checkbox-primary" checked />
                <span class="label-text">Publish immediately</span>
              </label>
            </div>
          </div>
        </div>

        <!-- ACTION BUTTONS -->
        <div class="flex flex-col sm:flex-row gap-4 justify-end">
          <a href="dashboard.html" class="btn btn-outline">Cancel</a>
          <button type="button" class="btn btn-ghost">Save Draft</button>
          <button type="submit" class="btn btn-primary">Publish Recipe</button>
        </div>
      </form>
    </div>
  </main>

@endsection