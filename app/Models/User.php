<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasFactory;

    protected $table = 'users';
    protected $primaryKey = 'id_user'; // Karena id-nya bukan id biasa, tapi id_user

    protected $fillable = [
        'name_user',
        'email_user',
        'password_user',
        'role_user',
        'phone_user',
        'address_user',
    ];

    public $timestamps = true;
}