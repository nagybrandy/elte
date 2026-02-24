<?php

namespace Database\Seeders;

use App\Models\Playlist;
use App\Models\Track;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlaylistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Define a list of themed playlists
        $playlists = [
            [
                'name' => 'Classic Rock Hits',
                'description' => 'The greatest rock songs from the 60s, 70s, and 80s',
                'user_id' => User::all()->random()->id,
            ],
            [
                'name' => 'Road Trip Mix',
                'description' => 'Perfect songs for long drives and adventures',
                'user_id' => User::all()->random()->id,
            ],
            [
                'name' => 'Workout Motivation',
                'description' => 'High-energy tracks to keep you going during exercise',
                'user_id' => User::all()->random()->id,
            ],
            [
                'name' => 'Chill Vibes',
                'description' => 'Relaxing tunes for unwinding and relaxation',
                'user_id' => User::all()->random()->id,
            ],
            [
                'name' => 'Legends of Music',
                'description' => 'Iconic songs from legendary artists across generations',
                'user_id' => User::all()->random()->id,
            ],
        ];

        // Get all tracks to add to playlists
        $allTracks = Track::all();
        
        // Create each playlist and attach tracks
        foreach ($playlists as $playlistData) {
            $playlist = Playlist::create($playlistData);
            
            // Attach a random subset of tracks to each playlist
            $trackIds = $allTracks->random(rand(3, 6))->pluck('id')->toArray();
            $playlist->tracks()->attach($trackIds);
        }
        
/*         // Create a few more random playlists with the factory'
        Playlist::factory(3)->create()->each(function ($playlist) use ($allTracks) {
            // Also attach random tracks to these playlists
            $trackIds = $allTracks->random(rand(2, 5))->pluck('id')->toArray();
            $playlist->tracks()->attach($trackIds);
        }); */
    }
}
