<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\RateType;

class RateTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RateType::create(['name' => 'xPersona', 'description' => 'El precio del plan es por persona']);
        RateType::create(['name' => 'Total', 'description' => 'El plan tiene un precio único total']);
    }
}
