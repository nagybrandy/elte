<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipe;

class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('recipe.recipe-list', [
            'recipes' => Recipe::all(),
            'success' => session('success'),
            'error' => session('error'),
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('recipe.create-recipe', [
            'recipe' => new Recipe(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:500'],
            'prep' => ['nullable', 'integer'],
            'cook' => ['nullable', 'integer'],
            'servings' => ['nullable', 'integer'],
            'image' => ['nullable', 'string', 'max:500'],
            'tags' => ['nullable', 'string', 'max:255'],
            'url' => ['nullable', 'string', 'max:500'],
            'image_file' => ['nullable', 'image', 'max:2048'],
        ]);

        if ($request->hasFile('image_file')) {
            $validated['image_file'] = $request->file('image_file')->store('recipes', 'public');
        }

        $recipe = Recipe::create($validated);
        return redirect()->route('recipes.show', $recipe->id);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return view('recipe.show-recipe', [
            'recipe' => Recipe::find($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return view('recipe.create-recipe', [
            'recipe' => Recipe::find($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:500'],
            'tags' => ['nullable', 'string', 'max:255'],
            'prep' => ['nullable', 'integer'],
            'cook' => ['nullable', 'integer'],
            'servings' => ['nullable', 'integer'],
            'image' => ['nullable', 'string', 'max:500'],
            'image_file' => ['nullable', 'image', 'max:2048'],
        ]);

        if ($request->hasFile('image_file')) {
            $validated['image_file'] = $request->file('image_file')->store('recipes', 'public');
        } else {
            unset($validated['image_file']);
        }

        Recipe::findOrFail($id)->update($validated);
        
        return redirect()->route('recipes.show', $id)->with('success', 'Recipe updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $recipe = Recipe::findOrFail($id);
        $recipe->delete();
        return view('recipe.recipe-list', [
            'recipes' => Recipe::all(),
            'success' => 'Recipe deleted successfully',
            'error' => null,
        ]);
    }
}
