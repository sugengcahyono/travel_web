<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validated = $request->validate([
            'name_user' => 'required|string|max:100',
            'email_user' => 'required|string|email|unique:users,email_user',
            'password_user' => 'required|string|min:6',
            'phone_user' => 'required|string|max:20',
            'address_user' => 'required|string|max:255', // <== tambahkan ini
        ]);

        $user = User::create([
            'name_user' => $validated['name_user'],
            'email_user' => $validated['email_user'],
            'password_user' => Hash::make($validated['password_user']),
            'phone_user' => $validated['phone_user'],
            'address_user' => $validated['address_user'], // <== tambahkan ini
        ]);

        $token = $user->createToken('api_token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function login(Request $request)
    {
        $validated = $request->validate([
            'email_user' => 'required|string|email',
            'password_user' => 'required|string',
        ]);

        $user = User::where('email_user', $validated['email_user'])->first();

        if (!$user || !Hash::check($validated['password_user'], $user->password_user)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $user->createToken('api_token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json(['message' => 'Logged out']);
    }
}