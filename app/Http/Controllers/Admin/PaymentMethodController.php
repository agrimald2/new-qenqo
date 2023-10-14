<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PaymentMethod;
use Illuminate\Http\Request;

class PaymentMethodController extends Controller
{
    public function getPaymentMethods(){
        $paymentMethods = PaymentMethod::all();
        return response()->json($paymentMethods);
    }

    public function store(Request $request){
        $paymentMethod = PaymentMethod::create($request->all());
        return response()->json($paymentMethod, 201);
    }

    public function update(Request $request, $id){
        $paymentMethod = PaymentMethod::findOrFail($id);
        $paymentMethod->update($request->all());
        return response()->json($paymentMethod);
    }

    public function delete($id){
        $paymentMethod = PaymentMethod::findOrFail($id);
        $paymentMethod->delete();
        return response()->json(null, 204);
    }
}