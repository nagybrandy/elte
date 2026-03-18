<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Collection;
class CollectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Collection::create([
            'name' => 'Breakfast',
            'description' => 'Breakfast recipes',
            'image' => 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg  ',
            'tags' => 'breakfast, eggs, bacon, toast',
        ]);
        Collection::create([
            'name' => 'Lunch',
            'description' => 'Lunch recipes',
            'image' => 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
            'tags' => 'lunch, sandwich, salad, soup',
        ]);
        Collection::create([
            'name' => 'Dinner',
            'description' => 'Dinner recipes',
            'image' => 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
            'tags' => 'dinner, pasta, steak, fish',
        ]);
        Collection::create([
            'name' => 'Dessert',
            'description' => 'Dessert recipes',
            'image' => 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
            'tags' => 'dessert, cake, ice cream, pie',
        ]);
    }
}
