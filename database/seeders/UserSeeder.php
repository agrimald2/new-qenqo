<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'role_id' => 1,
            'dni' => '12345678',
            'name' => 'Admin User',
            'phone' => '987654321',
            'username' => 'admin',
            'password' => Hash::make('admin123'),
            'isActive' => true,
        ]);
    }
}
