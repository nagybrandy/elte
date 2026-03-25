<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Recipe;

class Collection extends Model
{
    protected $table = 'collections';
    protected $fillable = [
        'name',
        'description',
        'image',
        'tags',
    ];
    
    public function recipes()
    {
        return $this->belongsToMany(Recipe::class, 'table_collection_recipe');
    }
}
