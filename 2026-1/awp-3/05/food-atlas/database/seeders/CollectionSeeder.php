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
            'title' => 'Italian Recipes',
            'image' => 'https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg',
            'description' => 'A collection of Italian recipes',
            'tags' => 'Italian, pasta, pizza, risotto',
        ]);

        Collection::create([
            'title' => 'Mexican Recipes',
                'image' => 'https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg',
            'description' => 'A collection of Mexican recipes',
            'tags' => 'Mexican, tacos, burritos, enchiladas',
        ]);

        Collection::create([
            'title' => 'Japanese Recipes',
            'image' => 'https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg',
            'description' => 'A collection of Japanese recipes',
            'tags' => 'Japanese, sushi, ramen, tempura',
        ]);
    }
}
