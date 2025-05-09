<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\DestinationController;
use App\Http\Controllers\Api\WishlistController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\PaymentController;

Route::apiResource('users', UserController::class);
Route::apiResource('destinations', DestinationController::class);
Route::apiResource('wishlists', WishlistController::class);
Route::apiResource('blogs', BlogController::class);
Route::apiResource('testimonials', TestimonialController::class);
Route::apiResource('bookings', BookingController::class);
Route::apiResource('payments', PaymentController::class);













