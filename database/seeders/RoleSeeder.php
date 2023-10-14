<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create(['name' => 'Admin', 'description' => 'Administrador del sistema']);
        Role::create(['name' => 'Trainer', 'description' => 'Entrenadores']);
        Role::create(['name' => 'Student', 'description' => 'Estudiantes']);
        Role::create(['name' => 'Nutricionist', 'description' => 'Nutricionistas']);
    }
}
