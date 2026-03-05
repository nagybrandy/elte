<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $recipes = Recipe::latest()->paginate(12);
        return view('recipe.index', compact('recipes'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return view('recipe.edit');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:500',
            'prep' => 'required|integer',
            'cook' => 'required|integer',
            'servings' => 'required|integer',
            'image' => 'nullable|url',
            'tags' => 'nullable|json',
        ]);

        // Ensure image is never null (DB may have NOT NULL constraint)
        $validated['image'] = $validated['image'] ?? '';
        $validated['url'] = $validated['url'] ?? '';

        // Convert comma-separated tags to JSON array when present
        if (!empty($validated['tags'])) {
            $validated['tags'] = array_values(array_filter(array_map('trim', explode(',', $validated['tags']))));
        } else {
            $validated['tags'] = [];
        }

        $recipe = Recipe::create($validated);
        if(!$recipe) {
            return redirect()->route('recipes.index')->with('error', 'Failed to create recipe');
        } else {
            return redirect()->route('recipes.show', $recipe->id)->with('success', 'Recipe created successfully');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Recipe $recipe)
    {
        //
        return view('recipe.show', [
            'recipe' => $recipe
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Recipe $recipe)
    {
        return view('recipe.edit', [
            'recipe' => $recipe
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Recipe $recipe)
    {
        $request['url'] = $request->url ?? '';
        $request['image'] = $request->image ?? '';
        $request['tags'] = $request->tags ?? '';
        $recipe->update($request->all());

        if(!$recipe) {
            return redirect()->route('recipes.show', $recipe->id)->with('error', 'Failed to update recipe');
        } else {
            return redirect()->route('recipes.show', $recipe->id)->with('success', 'Recipe updated successfully');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Recipe $recipe)
    {
        $recipe->delete();
        if(!$recipe) {
            return redirect()->route('recipes.index')->with('error', 'Failed to delete recipe');
        } else {
            return redirect()->route('recipes.index')->with('success', 'Recipe deleted successfully');
        }
    }
}
