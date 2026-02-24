<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'screening_id',
        'number_of_tickets',
        'seats',
        'total_price',
        'status'
    ];

    protected $casts = [
        'total_price' => 'decimal:2',
        'seats' => 'array'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function screening()
    {
        return $this->belongsTo(Screening::class);
    }
}
