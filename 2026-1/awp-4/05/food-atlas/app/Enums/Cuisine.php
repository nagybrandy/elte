<?php

namespace App\Enums;

enum Cuisine
{
    case American;
    case Italian;
    case Mexican;
    case Indian;
    case Mediterranean;
    case Asian;
    case Other;

    public function label(): string
    {
        return match($this) {
            self::American => 'American',
            self::Italian => 'Italian',
            self::Mexican => 'Mexican',
            self::Indian => 'Indian',
            self::Mediterranean => 'Mediterranean',
            self::Asian => 'Asian',
            self::Other => 'Other',
        };
    }

    public static function options(): array
    {
        return array_map(fn($case) => [
            'value' => $case->name,
            'label' => $case->label(),
        ], self::cases());
    }
}
