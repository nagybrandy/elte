<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TrackController;
use App\Http\Controllers\PlaylistController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
// Authentication Routes
Route::get('login', [AuthenticatedSessionController::class, 'create'])
    ->name('login')
    ->middleware('guest');

Route::post('login', [AuthenticatedSessionController::class, 'store'])
    ->middleware('guest');

Route::get('register', [RegisteredUserController::class, 'create'])
    ->name('register')
    ->middleware('guest');

Route::post('register', [RegisteredUserController::class, 'store'])
    ->middleware('guest');

Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout')
    ->middleware('auth');

Route::get('/', function () {
    return view('welcome');
});

Route::get('/profile/{name?}', function ($name = "Anonymus") {
    return "<h1>Hello". $name. "</h1>";
});

Route::get('/tracks/create', [TrackController::class, 'create'])->name('tracks.create');
Route::post('/tracks', [TrackController::class, 'store'])->name('tracks.store');
Route::get('/tracks', [TrackController::class, 'viewTracks'])->name('tracks.viewTracks');

Route::delete('/tracks/{id}', [TrackController::class, 'delete'])->name('tracks.delete');


Route::get('/tracks/edit/{id}', [TrackController::class, 'edit'])->name('tracks.edit');
Route::put('/tracks/edit/{id}', [TrackController::class, 'update'])->name('tracks.update');

Route::get('/playlists', [PlaylistController::class, 'index'])->name('playlists.index');
Route::get('/playlists/edit/{id}', [PlaylistController::class, 'edit'])->name('playlists.edit');
Route::put('/playlists/edit/{id}', [PlaylistController::class, 'update'])->name('playlists.update');
Route::delete('/playlists/{id}', [PlaylistController::class, 'delete'])->name('playlists.delete');
Route::get('/playlists/create', [PlaylistController::class, 'create'])->name('playlists.create');
Route::post('/playlists/create', [PlaylistController::class, 'store'])->name('playlists.store');

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout')
    ->middleware('auth');
