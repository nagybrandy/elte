<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Landingcontroller;

Route::get('/', [LandingController::class, 'index']);

Route::get('/recipe', function () {
    return view('recipe');
});