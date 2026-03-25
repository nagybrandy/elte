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
            'cuisine' => 'nullable|string',
            'image' => 'nullable|url',
            'tags' => 'nullable|string',
        ]);

        // Ensure image is never null (DB may have NOT NULL constraint)
        $validated['image'] = $validated['image'] ?? '';
        $validated['url'] = $validated['url'] ?? '';

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
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:500',
            'prep' => 'required|integer',
            'cook' => 'required|integer',
            'servings' => 'required|integer',
            'cuisine' => 'nullable|string',
            'image' => 'nullable|url',
            'tags' => 'nullable|string',
            'image_file' => 'nullable|max:2048',
        ]);

        if(request()->hasFile('image_file')) {
            $validated['image_file'] = request()->file('image_file')->store('recipes', 'public');
            $validated['image'] = asset('storage/' . $validated['image_file']);
        }

        $recipe->update($validated);       
        return redirect()->route('recipes.show', $recipe->id)->with('success', 'Recipe updated successfully');
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
