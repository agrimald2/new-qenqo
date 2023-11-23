<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Family;

class FamilySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Family::create(['name' => 'INTIHUATANA']);
        Family::create(['name' => 'PERSONALIZADO']);
        Family::create(['name' => 'SEMIPERSONALIZADO']);
        Family::create(['name' => 'MEMBRESÍA LIBRE']);
    }
}
