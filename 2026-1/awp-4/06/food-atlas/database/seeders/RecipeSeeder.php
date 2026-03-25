<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Recipe;


class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Recipe::factory()->count(10)->create();
        $recipes = file_get_contents(base_path('recipes.json'));
        $recipes = json_decode($recipes, true);
        foreach ($recipes as $recipe) {
            Recipe::create($recipe);
        } 

    }
}
