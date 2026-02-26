<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipe;

class LandingController extends Controller
{
    public function index() {
        // $recipes = json_decode(file_get_contents(base_path("recipes.json")), true);
        $recipes = Recipe::all();
        
        return view('landing.home', [
            "heroMessage" => 'Food is great!',
            "recipes" => $recipes
        ]);
    }
}
