<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\CollectionController;

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('/recipes', RecipeController::class)->only('create', 'store', 'edit', 'update', 'destroy');
    Route::resource('/collections', CollectionController::class)->only('create', 'store', 'edit', 'update', 'destroy');
});


Route::get('/', [LandingController::class, 'index'])->name('landing');

Route::get('/carbonara', function () {
    return view('carbonara');
});

Route::resource('/recipes', RecipeController::class)->only('show', 'index');
Route::resource('/collections', CollectionController::class)->only('show', 'index');

require __DIR__.'/auth.php';
require __DIR__.'/api.php';

