<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    // Tampilkan semua testimonial
    public function index()
    {
        return response()->json(Testimonial::all());
    }

    // Simpan testimonial baru
    public function store(Request $request)
    {
        $validated = $request->validate([
            'message_testimoni' => 'required|string|max:255',
            'rating_testimoni' => 'required|integer|min:1|max:5',
            'users_id_user' => 'required|exists:users,id_user',
        ]);

        $testimonial = Testimonial::create($validated);

        return response()->json($testimonial, 201);
    }

    // Tampilkan 1 testimonial berdasarkan ID
    public function show($id)
    {
        $testimonial = Testimonial::findOrFail($id);
        return response()->json($testimonial);
    }

    // Update testimonial
    public function update(Request $request, $id)
    {
        $testimonial = Testimonial::findOrFail($id);

        $testimonial->update($request->all());

        return response()->json($testimonial);
    }

    // Hapus testimonial
    public function destroy($id)
    {
        $testimonial = Testimonial::findOrFail($id);
        $testimonial->delete();

        return response()->json(null, 204);
    }
}