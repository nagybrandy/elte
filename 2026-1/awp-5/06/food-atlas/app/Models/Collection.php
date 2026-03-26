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
        'user_id',
    ];

    
    public function recipes()
    {
        return $this->belongsToMany(Recipe::class, 'table_collection_recipe');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
