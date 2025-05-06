<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Destination extends Model
{
    use HasFactory;

    protected $table = 'destinations';
    protected $primaryKey = 'id_destination';

    protected $fillable = [
        'name_destination',
        'location_destination',
        'description_destination',
        'image_destination',
        'price_destination',
    ];

    public $timestamps = true;
}