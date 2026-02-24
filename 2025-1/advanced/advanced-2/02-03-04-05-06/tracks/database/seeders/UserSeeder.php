<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'jay',
            'email' => 'jay@gmail.com',
            'password' => 'jay',
            'is_admin' => true,
        ]);
        User::create([
            'name' => 'jane',
            'email' => 'jane@gmail.com',
            'password' => 'jane',
            'is_admin' => false,
        ]);
        User::create([
            'name' => 'john',
            'email' => 'john@gmail.com',
            'password' => 'john',
            'is_admin' => false,
        ]);
        
    }
}
