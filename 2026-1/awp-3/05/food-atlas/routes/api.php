<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RecipesAPIController;

Route::prefix('api')->group(function () {
    Route::resource('recipes', RecipesAPIController::class);
});