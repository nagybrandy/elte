<?php

namespace App\Enums;

enum Cuisine
{
    case Italian;
    case Mexican;
    case Japanese;
    case Korean;
    case Chinese;
    case Indian;
    case Thai;
    case Vietnamese;
    case Indonesian;
    case Malaysian;
    case American;
    case Other;

    public function label(): string
    {
        return match($this) {
            self::Italian => 'Italian',
            self::Mexican => 'Mexican',
            self::Japanese => 'Japanese',
            self::Korean => 'Korean',
            self::Chinese => 'Chinese',
            self::Indian => 'Indian',
            self::Thai => 'Thai',
            self::Vietnamese => 'Vietnamese',
            self::Indonesian => 'Indonesian',
            self::Malaysian => 'Malaysian',
            self::American => 'American',
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
