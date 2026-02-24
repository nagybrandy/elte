<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Movie;
use App\Models\Room;
use App\Models\Screening;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => "admin",
            'role' => 'admin',
        ]);

        // Create rooms
        $rooms = [
            [
                'name' => 'Grand Hall',
                'rows' => 10,
                'seats_per_row' => 10,
            ],
            [
                'name' => 'Small Theater',
                'rows' => 7,
                'seats_per_row' => 8,
            ],
        ];

        foreach ($rooms as $room) {
            Room::create($room);
        }

        // Sample movies
        $movies = [
            [
                'title' => 'Dune: Part Two',
                'description' => 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
                'duration' => 166,
                'director' => 'Denis Villeneuve',
                'genre' => 'Sci-Fi',
                'release_year' => 2024,
                'image_path' => 'movies/dune.jpg'
            ],
            [
                'title' => 'Poor Things',
                'description' => 'The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.',
                'duration' => 141,
                'director' => 'Yorgos Lanthimos',
                'genre' => 'Drama',
                'release_year' => 2024,
                'image_path' => 'movies/poor-things.jpg'
            ],
            [
                'title' => 'Oppenheimer',
                'description' => 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
                'duration' => 180,
                'director' => 'Christopher Nolan',
                'genre' => 'Drama',
                'release_year' => 2023,
                'image_path' => 'movies/oppenheimer.jpg'
            ],
            [
                'title' => 'Godzilla x Kong: The New Empire',
                'description' => 'Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins and connection to Skull Island\'s mysteries.',
                'duration' => 115,
                'director' => 'Adam Wingard',
                'genre' => 'Action',
                'release_year' => 2024,
                'image_path' => 'movies/godzilla-kong.jpg'
            ],
            [
                'title' => 'Civil War',
                'description' => 'In a near-future America, a civil war is unfolding as journalists try to navigate the dangerous landscape.',
                'duration' => 109,
                'director' => 'Alex Garland',
                'genre' => 'Action',
                'release_year' => 2024,
                'image_path' => 'movies/civil-war.jpg'
            ],
            [
                'title' => 'Ghostbusters: Frozen Empire',
                'description' => 'When the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second Ice Age.',
                'duration' => 115,
                'director' => 'Gil Kenan',
                'genre' => 'Comedy',
                'release_year' => 2024,
                'image_path' => 'movies/ghostbusters.jpg'
            ],
            [
                'title' => 'Inside Out 2',
                'description' => 'Follow Riley in her teenage years as new emotions join Joy, Sadness, Anger, Fear, and Disgust in headquarters.',
                'duration' => 100,
                'director' => 'Kelsey Mann',
                'genre' => 'Animation',
                'release_year' => 2024,
                'image_path' => 'movies/inside-out-2.jpg'
            ],
            [
                'title' => 'Kung Fu Panda 4',
                'description' => 'Po must train a new warrior when he\'s chosen to become the spiritual leader of the Valley of Peace.',
                'duration' => 94,
                'director' => 'Mike Mitchell',
                'genre' => 'Animation',
                'release_year' => 2024,
                'image_path' => 'movies/kung-fu-panda-4.jpg'
            ],
        ];

        $movies = array_map(function($movieData) {
            return Movie::create($movieData);
        }, $movies);

        // Create screenings for the next 2 months
        $startDate = Carbon::now();
        $endDate = Carbon::now()->addMonths(2);
        
        while ($startDate->lte($endDate)) {
            // Create 5-6 screenings per day (increased from 3-4)
            $screeningsPerDay = rand(2, 3);
            
            // Morning, afternoon, and evening screenings
            $timeSlots = [
                ['start' => 10, 'end' => 13], // Morning
                ['start' => 14, 'end' => 17], // Afternoon
                ['start' => 18, 'end' => 22], // Evening
            ];
            
            foreach ($timeSlots as $slot) {
                // 1-2 screenings per time slot
                $screeningsInSlot = rand(1, 2);
                
                for ($i = 0; $i < $screeningsInSlot; $i++) {
                    $movie = $movies[array_rand($movies)];
                    $room = Room::find(rand(1, 2));
                    $hour = rand($slot['start'], $slot['end']);
                    
                    Screening::create([
                        'movie_id' => $movie->id,
                        'room_id' => $room->id,
                        'start_time' => $startDate->copy()->setHour($hour)->setMinute(0),
                        'price' => rand(1500, 2500)
                    ]);
                }
            }
            
            $startDate->addDay();
        }
    }
}
