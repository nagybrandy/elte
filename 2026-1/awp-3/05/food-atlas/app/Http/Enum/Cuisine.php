<?php

namespace App\Http\Enum;

enum Cuisine : string 
{
    case Italian = 'italian';
    case Hungarian = 'hungarian';
    case Asian = 'asian';
    case Mexican = 'mexican';
    case French = 'french';
    case Indian = 'indian';
    case American = 'american';
    case Mediterranean = 'mediterranean';
    case Other = 'other';

    public function label(): string
    {
        return match($this) {
            self::Hungarian => 'Hungarian',
            self::Italian => 'Italian',
            self::Asian => 'Asian',
            self::Mexican => 'Mexican',
            self::French => 'French',
            self::Indian => 'Indian',
            self::American => 'American',
            self::Mediterranean => 'Mediterranean',
            self::Other => 'Other',
        };

        return $this->value;
    }

    public static function options(): array
    {
        return array_map(fn($case) => [
            'value' => $case->value,
            'label' => $case->label(),
        ], self::cases());
    }
}
