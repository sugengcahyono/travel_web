<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    use HasFactory;

    protected $table = 'whishlists'; // Nama tabel sesuai migration
    protected $primaryKey = 'id_whishlist';

    protected $fillable = [
        'users_id_user',
        'destinations_id_destination',
    ];

    public $timestamps = true;

    // Relasi opsional (jika mau dipakai nanti)
    public function user()
    {
        return $this->belongsTo(User::class, 'users_id_user', 'id_user');
    }

    public function destination()
    {
        return $this->belongsTo(Destination::class, 'destinations_id_destination', 'id_destination');
    }
}