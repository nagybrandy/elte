<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;

Route::get('/', [LandingController::class, 'index']);

Route::get('/carbonara', function () {
    return view('carbonara');
});

