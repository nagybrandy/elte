<?php

use App\Http\Controllers\RecipesApiController;
use Illuminate\Support\Facades\Route;


Route::prefix('api')->group(function () {
    Route::resource('recipes', RecipesApiController::class)->only(['index', 'show']);
    Route::resource('collections', CollectionsApiController::class)->only(['index', 'show']);
});