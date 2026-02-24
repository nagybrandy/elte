<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Playlist extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'user_id',
    ];

    public function tracks()
    {
        return $this->belongsToMany(Track::class, 'track_playlist');
    }
    public function user()
    {
        return $this->belongsTo(related: User::class, foreignKey: 'user_id');
    }
}
