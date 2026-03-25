<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCollectionRequest;
use App\Http\Requests\UpdateCollectionRequest;
use App\Models\Collection;
use App\Models\Recipe;

class CollectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('collection.collection-list', [
            'collections' => Collection::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        if(auth()->check()) {
            return view('collection.create-collection')->with('collection', new Collection());
        } else {
            return redirect()->route('login')->with('error', 'You must be logged in to create a collection');
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCollectionRequest $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:500'],
            'tags' => ['nullable', 'string', 'max:255'],
            'image_file' => ['nullable', 'image', 'max:2048'],
        ]);

        if ($request->hasFile('image_file')) {
            $validated['image_file'] = $request->file('image_file')->store('collections', 'public');
        }

        $collection = Collection::create($validated);
        return redirect()->route('collections.index')->with('success', 'Collection created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Collection $collection)
    {
        //
        return view('collection.show-collection', [
            'collection' => $collection,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Collection $collection)
    {
        
        return view('collection.create-collection', [
            'collection' => $collection,
            'recipes' => Recipe::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCollectionRequest $request, Collection $collection)
    {
        $validated = $request->validate([
            'title' => "required|string|min:3|max:255",
            'description' => "nullable|string|max:500",
            'tags' => "nullable|string|max:255",
            'image_file' => "nullable|image|max:2048",
            'recipes' => "nullable|array",
        ]);

        $collection->update($validated);
        $collection->recipes()->sync($request->input('recipes', []));
        return redirect()->route('collections.show', $collection->id)->with('success', 'Collection updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Collection $collection)
    {
        //
    }
}
