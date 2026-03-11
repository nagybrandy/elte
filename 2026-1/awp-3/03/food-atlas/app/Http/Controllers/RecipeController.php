<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    /**
     * Display a listing of the resource. OKAY
     */
    public function index()
    {
        $recipes = Recipe::all();
        return view('recipes.index', [
            'recipes' => $recipes
        ]);
    }

    /**
     * Show the form for creating a new resource. OKAY
     */
    public function create()
    {
        return view('recipes.edit', [
            'recipe' => new Recipe()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = request()->validate([
            'title' => 'required|string|max:255',
            'image' => 'nullable|url',
            'description' => 'required|string|max:500'
        ]);
        if (!$validator) {
            return redirect->route('recipes.index')->with('error', 'Please fill in all fields');
        }
        $recipe = Recipe::create([
            'title' => $request->title,
            'image' => $request->image,
            'description' => $request->description,
            'prep' => $request->prep,
            'cook' => $request->cook,
            'servings' => $request->servings,
            'tags' => $request->tags,
        ]);
        return redirect()->route('recipes.show', $recipe->id)->with('success', 'Recipe created successfully');
    }

    /**
     * Display the specified resource. OKAY
     */
    public function show(Recipe $recipe)
    {
        
        return view('recipes.show', [
            'recipe' => $recipe
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Recipe $recipe)
    {
        return view('recipes.edit', [   
            'recipe' => $recipe
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Recipe $recipe)
    {
        $validator = request()->validate([
            'title' => 'required|string|max:255',
            'image' => 'nullable|url',
            'description' => 'required|string|max:500'
        ]);
        if (!$validator) {
            return redirect->route('recipes.show', $recipe->id)->with('error', 'Please fill in all fields');
        }
        $Recipe = Recipe::find($recipe->id);
        $Recipe->update($request->all());
        return redirect()->route('recipes.show', $recipe->id)->with('success', 'Recipe updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Recipe $recipe)
    {
        $Recipe = Recipe::find($recipe->id);
        $Recipe->delete();
        return redirect()->route('recipes.index')->with('success', 'Recipe deleted successfully');
    }
}
