<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    // Tampilkan semua payments
    public function index()
    {
        return response()->json(Payment::all());
    }

    // Simpan payment baru
    public function store(Request $request)
    {
        $validated = $request->validate([
            'method_payment' => 'required|string|max:255',
            'amount_payment' => 'required|numeric|min:0',
            'proof_payment' => 'required|string',
            'status_payment' => 'required|in:1,2',
            'bookings_id_booking' => 'required|exists:bookings,id_booking',
        ]);

        $payment = Payment::create($validated);

        return response()->json($payment, 201);
    }

    // Tampilkan 1 payment berdasarkan ID
    public function show($id)
    {
        $payment = Payment::findOrFail($id);
        return response()->json($payment);
    }

    // Update payment
    public function update(Request $request, $id)
    {
        $payment = Payment::findOrFail($id);

        $payment->update($request->all());

        return response()->json($payment);
    }

    // Hapus payment
    public function destroy($id)
    {
        $payment = Payment::findOrFail($id);
        $payment->delete();

        return response()->json(null, 204);
    }
}