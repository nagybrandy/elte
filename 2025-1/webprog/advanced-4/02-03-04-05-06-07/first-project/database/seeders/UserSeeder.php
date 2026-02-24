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
            'name' => 'Jay',
            'email' => 'jay@gmail.com',
            'password' => 'jay',
        ]);
        User::create([
            'name' => 'John',
            'email' => 'john@gmail.com',
            'password' => 'john',
        ]);
        User::create([
            'name' => 'Jane',
            'email' => 'jane@gmail.com',
            'password' => 'jane',
        ]);
    }
}
