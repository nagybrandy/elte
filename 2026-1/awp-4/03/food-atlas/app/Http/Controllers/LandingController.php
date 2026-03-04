<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipe;

class LandingController extends Controller
{
    public function index() {
     $recipes = file_get_contents(base_path('recipes.json'));
     $recipes = Recipe::all();
     
     return view('landing', [
        'recipes' => $recipes,
        'HeroMessage' => 'Discover Recipes from Every Corner of the World!!!!',
     ]);
     }
}
