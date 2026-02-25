<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Recipe extends Model
{
    use HasFactory;

    protected $table = 'recipes';

    protected $fillable = [
        'title', 
        'image', 
        'description', 
        'prep', 
        'cook', 
        'servings', 
        'tags', 
        'url'
    ];

}