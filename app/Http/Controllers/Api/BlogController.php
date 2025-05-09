<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    // Tampilkan semua blog
    public function index()
    {
        return response()->json(Blog::all());
    }

    // Simpan blog baru
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title_blog' => 'required|string|max:255',
            'content_blog' => 'required',
            'image_blog' => 'required',
            'users_id_user' => 'required|exists:users,id_user',
        ]);

        $blog = Blog::create($validated);

        return response()->json($blog, 201);
    }

    // Tampilkan 1 blog berdasarkan ID
    public function show($id)
    {
        $blog = Blog::findOrFail($id);
        return response()->json($blog);
    }

    // Update blog
    public function update(Request $request, $id)
    {
        $blog = Blog::findOrFail($id);

        $blog->update($request->all());

        return response()->json($blog);
    }

    // Hapus blog
    public function destroy($id)
    {
        $blog = Blog::findOrFail($id);
        $blog->delete();

        return response()->json(null, 204);
    }
}