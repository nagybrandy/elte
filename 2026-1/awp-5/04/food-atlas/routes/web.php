<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\CollectionController;

Route::get('/', [LandingController::class, 'index'])->name('landing');

Route::get('/carbonara', function () {
    return view('carbonara');
});

Route::resource('/recipes', RecipeController::class);
Route::resource('/collections', CollectionController::class);