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
        Schema::create('bookings', function (Blueprint $table) {
            $table->id('id_booking');
            $table->date('date_booking');
            $table->date('traveldate_booking');
            $table->integer('people_booking');
            $table->decimal('totalprice_booking', 10, 2);
            $table->enum('status_booking', ['1', '2', '3']);
            $table->unsignedBigInteger('users_id_user');
            $table->unsignedBigInteger('destinations_id_destination');
            $table->timestamps();
        
            $table->foreign('users_id_user')->references('id_user')->on('users')->onDelete('cascade');
            $table->foreign('destinations_id_destination')->references('id_destination')->on('destinations')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
