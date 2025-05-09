<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $table = 'bookings';
    protected $primaryKey = 'id_booking';

    protected $fillable = [
        'date_booking',
        'traveldate_booking',
        'people_booking',
        'totalprice_booking',
        'status_booking',
        'users_id_user',
        'destinations_id_destination',
    ];

    public $timestamps = true;
}