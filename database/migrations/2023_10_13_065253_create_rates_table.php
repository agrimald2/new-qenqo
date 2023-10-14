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
        Schema::create('rates', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('family_id');
            $table->string('name');
            $table->text('description')->nullable();
            $table->integer('sessions_number')->default(1);
            $table->integer('min_people')->default(1);
            $table->integer('max_people');
            $table->unsignedBigInteger('rate_type_id');
            $table->decimal('price', 8, 2);
            $table->integer('days_duration');
            $table->integer('max_freeze_days')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rates');
    }
};
