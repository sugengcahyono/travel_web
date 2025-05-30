<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use Illuminate\Http\Request;
use App\Http\Resources\DestinationResource;


class DestinationController extends Controller
{
    // Get semua destinasi
    public function index()
{
    return DestinationResource::collection(Destination::all());
}

    // Simpan destinasi baru
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name_destination' => 'required|string|max:255',
            'location_destination' => 'required|string|max:255',
            'description_destination' => 'required|string',
            'image_destination' => 'required|string',
            'price_destination' => 'required|numeric',
        ]);

        $destination = Destination::create($validated);

        return response()->json($destination, 201);
    }

    // Tampilkan destinasi berdasarkan id
    public function show($id)
    {
        $destination = Destination::findOrFail($id);
        return response()->json($destination);
    }

    // Update destinasi
    public function update(Request $request, $id)
    {
        $destination = Destination::findOrFail($id);

        $destination->update($request->all());

        return response()->json($destination);
    }

    // Hapus destinasi
    public function destroy($id)
    {
        $destination = Destination::findOrFail($id);
        $destination->delete();

        return response()->json(null, 204);
    }
}