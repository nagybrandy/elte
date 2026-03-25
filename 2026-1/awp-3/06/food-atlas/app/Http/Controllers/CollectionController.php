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
        $collections = Collection::latest()->paginate(3);
        return view('collections.index', [
            'collections' => $collections
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('collections.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCollectionRequest $request)
    {
        $validator = request()->validate([
            'title' => 'required|string|max:255',
            'image' => 'nullable|url',
            'description' => 'required|string|max:500',
            'image_file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'tags' => 'required|string|max:255',
        ]);
        if($request->hasFile('image_file')) {
            $image = $request->file('image_file')->store('collections', 'public');
            $request['image'] = '/storage/'. $image;
        }
        if (!$validator) {
            return redirect()->route('collections.index')->with('error', 'Please fill in all fields');
        }
        $collection = Collection::create([
            'title' => $request->title,
            'image' => $request->image,
            'description' => $request->description,
            'tags' => $request->tags,
        ]);
        return redirect()->route('collections.show', $collection->id)->with('success', 'Collection created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Collection $collection)
    {
        return view('collections.show', [
            'collection' => $collection
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Collection $collection)
    {
        return view('collections.edit', [
            'collection' => $collection
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCollectionRequest $request, Collection $collection)
    {
        $validator = request()->validate([
            'title' => 'required|string|max:255',
            'image' => 'nullable|url',
            'description' => 'required|string|max:500',
            'image_file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'tags' => 'required|string|max:255',
        ]);
        if($request->hasFile('image_file')) {
            $image = $request->file('image_file')->store('collections', 'public');
            $request['image'] = '/storage/'. $image;
        }
        if (!$validator) {
            return redirect()->route('collections.show', $collection->id)->with('error', 'Please fill in all fields');
        }
        $collection = Collection::find($collection->id);
        $collection->update($request->all());
        return redirect()->route('collections.show', $collection->id)->with('success', 'Collection updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Collection $collection)
    {
        $collection = Collection::find($collection->id);
        $collection->delete();
        return redirect()->route('collections.index')->with('success', 'Collection deleted successfully');
    }
}
