<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\RateType;

class RateTypeController extends Controller
{
    public function getRateTypes()
    {
        $rates = RateType::all();
        return response()->json($rates);
    }
}
