<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    // Tampilkan semua bookings
    public function index()
    {
        return response()->json(Booking::all());
    }

    // Simpan booking baru
    public function store(Request $request)
    {
        $validated = $request->validate([
            'date_booking' => 'required|date',
            'traveldate_booking' => 'required|date',
            'people_booking' => 'required|integer|min:1',
            'totalprice_booking' => 'required|numeric|min:0',
            'status_booking' => 'required|in:1,2,3',
            'users_id_user' => 'required|exists:users,id_user',
            'destinations_id_destination' => 'required|exists:destinations,id_destination',
        ]);

        $booking = Booking::create($validated);

        return response()->json($booking, 201);
    }

    // Tampilkan 1 booking berdasarkan ID
    public function show($id)
    {
        $booking = Booking::findOrFail($id);
        return response()->json($booking);
    }

    // Update booking
    public function update(Request $request, $id)
    {
        $booking = Booking::findOrFail($id);

        $booking->update($request->all());

        return response()->json($booking);
    }

    // Hapus booking
    public function destroy($id)
    {
        $booking = Booking::findOrFail($id);
        $booking->delete();

        return response()->json(null, 204);
    }
}