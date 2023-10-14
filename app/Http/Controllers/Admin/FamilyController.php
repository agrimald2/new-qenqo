<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Family;

class FamilyController extends Controller
{
    public function store(Request $request)
    {
        $family = new Family;
        $family->name = $request->name;
        $family->save();

        return response()->json($family, 201);
    }

    public function get()
    {
        $families = Family::all();
        return response()->json($families);
    }
}