<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Track;

class TrackSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Define a list of popular tracks with actual artists and albums
        $tracks = [
            [
                'name' => 'Bohemian Rhapsody',
                'artist' => 'Queen',
                'album' => 'A Night at the Opera',
                'length' => 355,
                'release_year' => 1975,
            ],
            [
                'name' => 'Billie Jean',
                'artist' => 'Michael Jackson',
                'album' => 'Thriller',
                'length' => 293,
                'release_year' => 1982,
            ],
            [
                'name' => 'Hotel California',
                'artist' => 'Eagles',
                'album' => 'Hotel California',
                'length' => 390,
                'release_year' => 1977,
            ],
            [
                'name' => 'Sweet Child O\' Mine',
                'artist' => 'Guns N\' Roses',
                'album' => 'Appetite for Destruction',
                'length' => 356,
                'release_year' => 1987,
            ],
            [
                'name' => 'Imagine',
                'artist' => 'John Lennon',
                'album' => 'Imagine',
                'length' => 183,
                'release_year' => 1971,
            ],
            [
                'name' => 'Smells Like Teen Spirit',
                'artist' => 'Nirvana',
                'album' => 'Nevermind',
                'length' => 301,
                'release_year' => 1991,
            ],
            [
                'name' => 'Stairway to Heaven',
                'artist' => 'Led Zeppelin',
                'album' => 'Led Zeppelin IV',
                'length' => 482,
                'release_year' => 1971,
            ],
            [
                'name' => 'Yesterday',
                'artist' => 'The Beatles',
                'album' => 'Help!',
                'length' => 125,
                'release_year' => 1965,
            ],
            [
                'name' => 'Like a Rolling Stone',
                'artist' => 'Bob Dylan',
                'album' => 'Highway 61 Revisited',
                'length' => 373,
                'release_year' => 1965,
            ],
            [
                'name' => 'Purple Haze',
                'artist' => 'Jimi Hendrix',
                'album' => 'Are You Experienced',
                'length' => 171,
                'release_year' => 1967,
            ],
        ];

        // Create each track
        foreach ($tracks as $trackData) {
            Track::createTrack($trackData);
        }

        // Add a few more random tracks using the factory
        Track::factory(count: 5)->create();
    }
}
