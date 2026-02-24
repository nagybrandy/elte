<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TrackController;
use App\Http\Controllers\PlaylistController;

Route::get('/', function () {
    return view("landing.hero", data: ["name" => "Bendi"]);
});

Route::get('/tracks', [TrackController::class, 'index'])->name('tracks.index');

Route::get('/hello/{name?}', function ($name = "Anonymus") {
    return "<h1>Hello ". $name ."!</h1>";
});

Route::get('/tracks/create', [TrackController::class, 'create'])->name('tracks.create');

Route::post('/tracks', [TrackController::class, 'store'])->name('tracks.store');

Route::get('/playlists', [PlaylistController::class, 'index'])->name('playlists.index');


Route::redirect('/auth', '/auth/login');

Route::get('/tracks/{trackId}/edit', [TrackController::class, 'edit'])->name('tracks.edit');

Route::put('/tracks/{trackId}', [TrackController::class, 'update'])->name('tracks.update');

Route::delete('/tracks/{trackId}', [TrackController::class, 'destroy'])->name('tracks.destroy');

Route::get('/playlists/{playlistId}/edit', [PlaylistController::class, 'edit'])->name('playlists.edit');

Route::put('/playlists/{playlistId}', [PlaylistController::class, 'update'])->name('playlists.update');

Route::delete('/playlists/{playlistId}', [PlaylistController::class, 'destroy'])->name('playlists.destroy');

Route::get('/playlists/create', [PlaylistController::class, 'create'])->name('playlists.create');

Route::post('/playlists', [PlaylistController::class, 'store'])->name('playlists.store');
