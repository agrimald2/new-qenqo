<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Log;
use DB;
use Inertia\Inertia;

class AppointmentTestController extends Controller
{
    public function scheduleView(){
        return Inertia::render('StudentRole/NewAppointmentTest/Schedule');
    }
    
    public function appointmentConfirmation(){
        return Inertia::render('StudentRole/NewAppointmentTest/Confirmation');
    }
}
