<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Recipe;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Recipe>
 */
class RecipeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Recipe::class;
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'image' => fake()->imageUrl(640, 480, 'food', true),
            'description' => fake()->paragraph(),
            'prep' => fake()->numberBetween(10, 60) . ' min',
            'cook' => fake()->numberBetween(10, 60) . ' min',
            'servings' => fake()->numberBetween(1, 10),
            'tags' => fake()->words(3, true),
            'url' => fake()->url() . '/recipe-' . fake()->slug(),
        ];
    }
}
