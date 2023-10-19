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
        Schema::create('active_plan_appointment_assistances', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('active_plan_appointment_id');
            $table->unsignedBigInteger('student_id');
            $table->enum('status', ['Pendiente', 'Confirmado', 'No Asistirá', 'No Asistió', 'Asistió'])->default('Pendiente');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('active_plan_appointment_assistances');
    }
};
