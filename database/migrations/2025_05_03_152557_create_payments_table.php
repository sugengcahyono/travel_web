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
        Schema::create('payments', function (Blueprint $table) {
            $table->id('id_payment');
            $table->string('method_payment', 255);
            $table->decimal('amount_payment', 10, 2);
            $table->text('proof_payment');
            $table->enum('status_payment', ['1', '2']);
            $table->unsignedBigInteger('bookings_id_booking');
            $table->timestamps();

            $table->foreign('bookings_id_booking')->references('id_booking')->on('bookings')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
