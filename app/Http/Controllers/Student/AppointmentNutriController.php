<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Log;
use DB;
use Inertia\Inertia;

class AppointmentNutriController extends Controller
{
    public function scheduleView(){
        return Inertia::render('StudentRole/AppointmentNutri/Schedule');
    }
    
    public function appointmentConfirmation(){
        return Inertia::render('StudentRole/AppointmentNutri/Confirmation');
    }
}
