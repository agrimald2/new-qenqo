<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('active_plans', function (Blueprint $table) {
            $table->id();
            $table->string('family_name');
            $table->string('rate_name');
            $table->integer('rate_sessions_number');
            $table->integer('rate_min_people');
            $table->integer('rate_max_people');
            $table->date('start_date');
            $table->date('end_date');
            $table->integer('rate_freeze_days');
            $table->string('created_by');
            $table->decimal('subtotal', 8, 2);
            $table->decimal('total', 8, 2);
            $table->decimal('total_payed', 8, 2)->default(0);
            $table->string('discount_code')->nullable();
            $table->integer('rate_sessions_assisted')->default(0);
            $table->integer('people_number')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('active_plans');
    }
};
