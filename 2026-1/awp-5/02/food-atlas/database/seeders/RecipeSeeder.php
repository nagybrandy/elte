<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Recipe;
use Database\Factories\RecipeFactory;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Recipe::create([
            'title' => 'Classic Chocolate Chip Cookies',
            'image' => 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80',
            'description' => 'A timeless recipe for soft and chewy chocolate chip cookies that everyone will love.',
            'prep' => '15 min prep',
            'cook' => '11 min cook',
            'servings' => 24,
            'tags' => "dessert, baking",
            'url' => 'https://www.allrecipes.com/recipe/10813/best-chocolate-chip-cookies/',
        ]);
        Recipe::factory(10)->create();
    }
}
