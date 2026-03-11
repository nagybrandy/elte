<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\RecipeController;
Route::get('/', [LandingController::class, 'index']);

Route::resource('recipes', RecipeController::class);

Route::get('recipes-add', [RecipeController::class, 'addRecipe']);