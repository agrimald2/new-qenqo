<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Log;
use DB;
use Inertia\Inertia;

class PlansController extends Controller
{
    public function buyRates(){
        return Inertia::render('StudentRole/Rate/BuyRates');
    }
}
