<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Http\Enum\Cuisine;


class Collection extends Model
{
    
    protected $table = 'collections';
    protected $fillable = [
        'title',
        'image',
        'description',
        'tags',
        'cuisine',
    ];

    protected $casts = [
        'cuisine' => Cuisine::class, // cast the cuisine column to the Cuisine enum
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function recipes()
    {
        return $this->belongsToMany(Recipe::class, 'collection_recipe');
    }
}
