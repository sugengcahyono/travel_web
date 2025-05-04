<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // Get semua user
    public function index()
    {
        return response()->json(User::all());
    }

    // Buat user baru
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name_user' => 'required|string|max:100',
            'email_user' => 'required|email|unique:users,email_user',
            'password_user' => 'required|min:6',
            'role_user' => 'required|in:1,2',
            'phone_user' => 'required',
            'address_user' => 'required',
        ]);

        $validated['password_user'] = bcrypt($validated['password_user']);

        $user = User::create($validated);

        return response()->json($user, 201);
    }

    // Tampilkan user berdasarkan id
    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    // Update user
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $user->update($request->all());

        return response()->json($user);
    }

    // Hapus user
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json(null, 204);
    }
}