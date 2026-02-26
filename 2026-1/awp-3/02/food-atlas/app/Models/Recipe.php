<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Recipe extends Model
{
    protected $table = 'recipes';
    use HasFactory;
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
