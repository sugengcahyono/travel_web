<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('destinations', function (Blueprint $table) {
            $table->id('id_destination');
            $table->string('name_destination', 255);
            $table->string('location_destination', 255);
            $table->text('description_destination');
            $table->text('image_destination');
            $table->decimal('price_destination', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('destinations');
    }
};
