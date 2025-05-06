<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\DestinationController;

Route::apiResource('users', UserController::class);
Route::apiResource('destinations', DestinationController::class);



