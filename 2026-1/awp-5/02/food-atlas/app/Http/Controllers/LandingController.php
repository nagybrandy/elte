<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipe;

class LandingController extends Controller
{
    function index() {
        // $recipes = json_decode(file_get_contents(base_path('recipes.json')), true);
        $recipes = Recipe::all();
        return view('landing', [
            'heroMessage' => 'Your Passport to Global Flavors!!!!',
            'recipes' => $recipes,
        ]);
    }
}
