<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Collection extends Model
{
    protected $table = 'collections';

    protected $fillable = [
        'user_id',
        'title',
        'image_file',
        'description',
        'tags',
    ];

    public function recipes()
    {
        return $this->belongsToMany(Recipe::class, 'collection_recipe');
    }
}
