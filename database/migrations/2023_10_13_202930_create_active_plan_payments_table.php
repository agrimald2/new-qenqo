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
        Schema::create('active_plan_payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('active_plan_id');
            $table->unsignedBigInteger('student_id');
            $table->decimal('total_payed', 8, 2);
            $table->string('payment_method');
            $table->string('registered_by');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('active_plan_payments');
    }
};
    