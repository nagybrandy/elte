<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Recipe;
use Database\Factories\RecipeFactory;
use App\Tags;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
     $recipes = json_decode(file_get_contents(base_path('recipes.json')), true);
     foreach ($recipes as $recipe) {        
        Recipe::create([
            'title' => $recipe['title'],
            'image' => $recipe['image'],
            'description' => $recipe['description'],
            'prep' => $recipe['prep'],
            'cook' => $recipe['cook'],
            'servings' => $recipe['servings'],
            'tags' => implode(',', $recipe['tags']),
            'url' => $recipe['url'],
        ]);
    }
    }
}
