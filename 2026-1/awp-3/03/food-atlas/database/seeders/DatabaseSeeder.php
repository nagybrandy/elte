<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Recipe;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

       // User::factory()->create([
       //     'name' => 'Test User',
       //     'email' => 'test@example.com',
       // ]);

        Recipe::create([
            'title' => 'Test Recipe1',
            'image' => 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80',
            'description' => 'A timeless recipe for soft and chewy chocolate chip cookies that everyone will love.',
            'prep' => '15 min prep',
            'cook' => '11 min cook',
            'servings' => 24,
            'tags' => 'dessert, baking',
            'url' => 'https://www.google.com',
        ]);
        Recipe::factory()->count(10)->create();
    }
}
