<?php
// nested routes for recipes
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RecipeAPIController;


Route::prefix('api')->group(function () {
    Route::resource('/recipes', RecipeAPIController::class)->only('index', 'show');
});
