<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $table = 'blogs';
    protected $primaryKey = 'id_blog';

    protected $fillable = [
        'title_blog',
        'content_blog',
        'image_blog',
        'users_id_user',
    ];

    public $timestamps = true;
}