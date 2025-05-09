<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $table = 'testimonials';
    protected $primaryKey = 'id_testimoni';

    protected $fillable = [
        'message_testimoni',
        'rating_testimoni',
        'users_id_user',
    ];

    public $timestamps = true;
}