<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCollectionRequest;
use App\Http\Requests\UpdateCollectionRequest;
use App\Models\Collection;
use App\Models\Recipe;
use App\Policies\CollectionPolicy;
use Illuminate\Support\Facades\Gate;



class CollectionController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $collections = Collection::all();
        return view('collection.index', compact('collections'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        if(!auth()->check() || !Gate::allows('create', Collection::class)) {
            return redirect()->route('login');
        }
        return view('collection.edit')->with('recipes', Recipe::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCollectionRequest $request)
    {
        if(!auth()->check() || !Gate::allows('create', Collection::class)) {
            return redirect()->route('login');
        }
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:500',
            'tags' => 'required|string|max:255',
            'image' => 'nullable|url',
            'image_file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if(request()->hasFile('image_file')) {
            $validated['image_file'] = request()->file('image_file')->store('collections', 'public');
            $validated['image'] = asset('storage/' . $validated['image_file']);
        }
        $validated['user_id'] = auth()->id();
        $collection = Collection::create($validated);

        if(!$collection) {
            return redirect()->route('collections.index')->with('error', 'Failed to create collection');
        } else {
            return redirect()->route('collections.show', $collection->id)->with('success', 'Collection created successfully');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Collection $collection)
    {
        return view('collection.show', [
            'collection' => $collection
        ]);
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Collection $collection)
    {
        if (!Gate::allows('update', $collection)) {
            abort(403);
        }

        if(!auth()->check()) {
            return redirect()->route('login');
        } 
        $recipes = Recipe::all();
        return view('collection.edit', [
            'collection' => $collection,
            'recipes' => $recipes
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCollectionRequest $request, Collection $collection)
    {
        if (!Gate::allows('update', $collection)) {
            abort(403);
        }
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:500',
            'tags' => 'required|string|max:255',
            'image' => 'nullable|url',
            'image_file' => 'nullable|max:2048',
            'recipes' => 'nullable|array',
        ]);

        if(request()->hasFile('image_file')) {
            $validated['image_file'] = request()->file('image_file')->store('collections', 'public');
            $validated['image'] = asset('storage/' . $validated['image_file']);
        }
        $validated['user_id'] = auth()->id();
        if($validated['recipes']) {
            $collection->recipes()->sync($validated['recipes']);
        } else {
            $collection->recipes()->detach();
        }

        $collection->update($validated);
        if(!$collection) {
            return redirect()->route('collections.index')->with('error', 'Failed to update collection');
        } else {
            return redirect()->route('collections.show', $collection->id)->with('success', 'Collection updated successfully');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Collection $collection)
    {
        if (!Gate::allows('delete', $collection)) {
            abort(403);
        }
        $collection->delete();
        if(!$collection) {
            return redirect()->route('collections.index')->with('error', 'Failed to delete collection');
        } else {
            return redirect()->route('collections.index')->with('success', 'Collection deleted successfully');
        }
    }
}
