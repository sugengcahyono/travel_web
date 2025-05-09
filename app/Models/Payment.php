<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $table = 'payments';
    protected $primaryKey = 'id_payment';

    protected $fillable = [
        'method_payment',
        'amount_payment',
        'proof_payment',
        'status_payment',
        'bookings_id_booking',
    ];

    public $timestamps = true;
}