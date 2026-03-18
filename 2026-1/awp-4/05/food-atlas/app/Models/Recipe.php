<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Enums\Cuisine;

class Recipe extends Model
{
    use HasFactory;

    protected $table = 'recipes';

    protected $fillable = [
        'title',
        'image',
        'image_file',
        'description',
        'prep',
        'cook',
        'servings',
        'tags',
        'url',
        'cuisine'
    ];
    
    public function collections()
    {
        return $this->belongsToMany(Collection::class, 'collection_recipe');
    }

    protected $casts = [
        'cuisine' => Cuisine::class,
    ];
}
