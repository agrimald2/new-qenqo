<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\RoleSeeder;
use Database\Seeders\RateTypeSeeder;
use Database\Seeders\PaymentMethodSeeder;
use Database\Seeders\FamilySeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            RoleSeeder::class,
            PaymentMethodSeeder::class,
            FamilySeeder::class,
            //RateTypeSeeder::class,
        ]);
    }
}
