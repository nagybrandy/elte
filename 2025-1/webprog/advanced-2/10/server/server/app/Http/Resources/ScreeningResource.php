<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ScreeningResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $room = $this->room;
        $unavailableSeats = [];
        
        foreach ($this->bookings as $booking) {
            if ($booking->status !== 'cancelled' && $booking->seats) {
                foreach ($booking->seats as $seat) {
                    $unavailableSeats[] = [
                        'row' => $seat['row'],
                        'seat' => $seat['number']
                    ];
                }
            }
        }

        return [
            'id' => $this->id,
            'movie' => $this->movie,
            'room' => $this->room,
            'start_time' => $this->start_time,
            'is_3d' => $this->is_3d,
            'price' => $this->price,
            'unavailable_seats' => $unavailableSeats,
        ];
    }
} 