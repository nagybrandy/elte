<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\CollectionController;


Route::get('/', [LandingController::class, 'index'])->name('home');

Route::resource('recipes', RecipeController::class);
Route::resource('collections', CollectionController::class);

Route::get('recipes-add', [RecipeController::class, 'addRecipe']);
