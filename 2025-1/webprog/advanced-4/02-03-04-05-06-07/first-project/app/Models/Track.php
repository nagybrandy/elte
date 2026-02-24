<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;

class Track extends Model
{
    use HasFactory, Notifiable;
    protected $fillable = ['title', 'artist', 'album', 'duration', 'release_year'];
}
