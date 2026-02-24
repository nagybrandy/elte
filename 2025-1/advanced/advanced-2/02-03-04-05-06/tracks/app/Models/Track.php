<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Track extends Model
{
    use HasFactory;
    protected $table = 'tracks';
    protected $fillable = [
        'name',
        'artist',
        'album',
        'length',
        'genre',
        'release_year',
        'updated_at',
        'created_at',
    ];

    
    public static function allTracks()
    {
        return self::all();
    }
    public static function createTrack(array $data)
    {
        return self::create($data);
    }

    public function playlists()
    {
        return $this->belongsToMany(Playlist::class, 'track_playlist');
    }
}