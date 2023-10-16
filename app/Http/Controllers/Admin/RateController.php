<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Rate;
use Log;

class RateController extends Controller
{
    public function index(){
        return Inertia::render('Rate/Index');
    }

    public function store(Request $request)
    {
        $rate = Rate::create($request->all());
        return response()->json($rate, 201);
    }

    public function destroy($id)
    {
        $rate = Rate::findOrFail($id);
        $rate->delete();
        return response()->json(null, 204);
    }

    public function getRates()
    {
        $rates = Rate::with(['family', 'rateType'])->get();
        return response()->json($rates);
    }
}
