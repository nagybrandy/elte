<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'image' => fake()->imageUrl(),
            'description' => fake()->paragraph(),
            'prep' => fake()->time(),
            'cook' => fake()->time(),
            'servings' => fake()->numberBetween(1, 10),
            'tags' => fake()->words(3, true),
            'url' => fake()->url(),
        ];
    }
}
