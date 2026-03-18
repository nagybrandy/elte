<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCollectionRequest;
use App\Http\Requests\UpdateCollectionRequest;
use App\Models\Collection;

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
        return view('collection.edit');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCollectionRequest $request)
    {
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
        return view('collection.edit', [
            'collection' => $collection
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCollectionRequest $request, Collection $collection)
    {
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
        $collection->delete();
        if(!$collection) {
            return redirect()->route('collections.index')->with('error', 'Failed to delete collection');
        } else {
            return redirect()->route('collections.index')->with('success', 'Collection deleted successfully');
        }
    }
}
