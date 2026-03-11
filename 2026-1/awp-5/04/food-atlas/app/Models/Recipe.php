<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Tags;

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

    protected $casts = [
        'tags' => 'array',
    ];
}