<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Wishlist;
use Illuminate\Http\Request;

class WishlistController extends Controller
{
    // Ambil semua wishlist
    public function index()
    {
        return response()->json(Wishlist::all());
    }

    // Tambah wishlist
    public function store(Request $request)
    {
        $validated = $request->validate([
            'users_id_user' => 'required|exists:users,id_user',
            'destinations_id_destination' => 'required|exists:destinations,id_destination',
        ]);

        $wishlist = Wishlist::create($validated);

        return response()->json($wishlist, 201);
    }

    // Ambil wishlist by id
    public function show($id)
    {
        $wishlist = Wishlist::findOrFail($id);
        return response()->json($wishlist);
    }

    // Update wishlist
    public function update(Request $request, $id)
    {
        $wishlist = Wishlist::findOrFail($id);

        $validated = $request->validate([
            'users_id_user' => 'required|exists:users,id_user',
            'destinations_id_destination' => 'required|exists:destinations,id_destination',
        ]);

        $wishlist->update($validated);

        return response()->json($wishlist);
    }

    // Hapus wishlist
    public function destroy($id)
    {
        $wishlist = Wishlist::findOrFail($id);
        $wishlist->delete();

        return response()->json(null, 204);
    }
}