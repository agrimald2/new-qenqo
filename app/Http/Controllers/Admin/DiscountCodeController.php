<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\DiscountCode;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class DiscountCodeController extends Controller
{
    public function index(){
        return Inertia::render('DiscountCode/Index');
    }

    public function store(Request $request){
        Log::debug($request);
        $discountCode = DiscountCode::create($request->all());
        return response()->json($discountCode, 201);
    }

    public function getDiscountCodes(){
        $discountCodes = DiscountCode::with('user')->get();
        return response()->json($discountCodes);
    }

    public function update(Request $request, $id){
        $discountCode = DiscountCode::findOrFail($id);
        $discountCode->update($request->all());
        return response()->json($discountCode);
    }

    public function getDiscountCodeByCode($code){
        $discountCode = DiscountCode::where('code', $code)->first();
        if($discountCode){
            return response()->json($discountCode);
        } else {
            return response()->json(['error' => 'Discount code not found'], 404);
        }
    }
}