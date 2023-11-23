<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PaymentMethod;

class PaymentMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PaymentMethod::create([
            'name' => 'MercadoPago',
            'description' => 'Pago por página web',
        ]);

        PaymentMethod::create([
            'name' => 'Efectivo',
            'description' => '-',
        ]);

        PaymentMethod::create([
            'name' => 'POS Físico',
            'description' => '-',
        ]);

        
        PaymentMethod::create([
            'name' => 'Transferencia BCP',
            'description' => '-',
        ]);
    }
}
