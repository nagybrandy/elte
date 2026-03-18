<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Tags;
use App\Enums\Cuisine;
use App\Models\Collection;

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
        'url',
        'cuisine'
    ];

    protected $casts = [
        'tags' => 'array',
        'cuisine' => Cuisine::class,
    ];

    public function collections()
    {
        return $this->belongsToMany(Collection::class, 'table_collection_recipe');
    }
}