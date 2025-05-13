<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\DestinationController;
use App\Http\Controllers\Api\WishlistController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\PaymentController;

use App\Http\Controllers\Api\AuthController;

Route::apiResource('users', UserController::class);
Route::apiResource('destinations', DestinationController::class);
Route::apiResource('wishlists', WishlistController::class);
Route::apiResource('blogs', BlogController::class);
Route::apiResource('testimonials', TestimonialController::class);
Route::apiResource('bookings', BookingController::class);
Route::apiResource('payments', PaymentController::class);






Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    // Contoh: route yang butuh auth
    Route::get('/profile', function (Request $request) {
        return $request->user();
    });
});








