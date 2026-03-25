<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Recipe;
use App\Models\Collection;
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

       $recipes = json_decode(file_get_contents(base_path("recipes.json")), true);

        foreach ($recipes as $recipe) {
            Recipe::create([
                'title' => $recipe['title'],
                'image' => $recipe['image'],
                'description' => $recipe['description'],
                'prep' => $recipe['prep'],
                'cook' => $recipe['cook'],
                'servings' => $recipe['servings'],
                'tags' =>$recipe['tags'],
            ]);

            
            Seeder::call(CollectionSeeder::class);
        }

    }
}
