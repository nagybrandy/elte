<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\RecipeController;

Route::get('/', [LandingController::class, 'index']);

Route::get('/carbonara', function () {
    return view('carbonara');
});

Route::resource('/recipes', RecipeController::class);
