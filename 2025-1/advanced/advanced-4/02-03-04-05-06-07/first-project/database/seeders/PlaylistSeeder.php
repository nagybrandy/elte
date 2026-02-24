<?php

namespace Database\Seeders;

use App\Models\Playlist;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Track;
use App\Models\User;
class PlaylistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create realistic playlists
        Playlist::create([
            'title' => 'Today\'s Top Hits',
            'description' => 'The hottest tracks right now - updated daily. Cover: Billie Eilish',
            'genre' => 'Pop',
            'image' => 'default.jpg',
            'user_id' => User::all()->random()->id
        ]);

        Playlist::create([
            'title' => 'Chill Lofi Study Beats',
            'description' => 'The perfect background music to boost your focus and productivity.',
            'genre' => 'Lo-fi',
            'image' => 'default.jpg',
            'user_id' => User::all()->random()->id
        ]);

        Playlist::create([
            'title' => 'Hip Hop Controller',
            'description' => 'The most influential hip hop tracks of the moment.',
            'genre' => 'Hip Hop',
            'image' => 'default.jpg',
            'user_id' => User::all()->random()->id
        ]);

        Playlist::create([
            'title' => 'Workout Essentials',
            'description' => 'High-energy tracks to power your workout and keep you motivated.',
            'genre' => 'Fitness',
            'image' => 'default.jpg',
            'user_id' => User::all()->random()->id
        ]);

        Playlist::create([
            'title' => 'Indie Radar',
            'description' => 'Discover the best new indie music before anyone else.',
            'genre' => 'Indie',
            'image' => 'default.jpg',
            'user_id' => User::all()->random()->id
        ]);

        Playlist::create([
            'title' => 'Peaceful Piano',
            'description' => 'Relaxing piano pieces for stress relief and mindfulness.',
            'genre' => 'Classical',
            'image' => 'default.jpg',
            'user_id' => User::all()->random()->id
        ]);

        Playlist::create([
            'title' => 'Rock Classics',
            'description' => 'Timeless rock anthems from the 70s, 80s, and 90s that defined generations.',
            'genre' => 'Rock',
            'image' => 'default.jpg',
            'user_id' => User::all()->random()->id
        ]);

        Playlist::create([
            'title' => 'Electronic Dance Mix',
            'description' => 'The latest electronic dance hits to keep the party going all night long.',
            'genre' => 'Electronic',
            'image' => 'default.jpg',
            'user_id' => User::all()->random()->id
        ]);

        Playlist::create([
            'title' => 'Jazz for Evening',
            'description' => 'Smooth jazz favorites perfect for winding down after a long day.',
            'genre' => 'Jazz',
            'image' => 'default.jpg',
            'user_id' => User::all()->random()->id
        ]);

        Playlist::create([
            'title' => 'Country Roads',
            'description' => 'The best of contemporary country music for your road trips and backyard barbecues.',
            'genre' => 'Country',
            'image' => 'default.jpg',
            'user_id' => User::all()->random()->id
        ]);

        // add the tracks randomly to the playlists

        $tracks = Track::all();
        $playlists = Playlist::all();

        foreach ($playlists as $playlist) {
            $playlist->tracks()->attach($tracks->random(rand(3, 10)));
        }
        
    }
}
