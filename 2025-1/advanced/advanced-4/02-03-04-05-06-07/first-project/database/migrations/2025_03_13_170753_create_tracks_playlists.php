<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tracks_playlists', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('track_id')->constrained('tracks');
            $table->foreignId('playlist_id')->constrained('playlists');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tracks_playlists');
    }
};
