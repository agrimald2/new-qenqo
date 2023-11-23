<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Log;
use DB;
use Inertia\Inertia;

class NewAppointmentController extends Controller
{
    public function scheduleView(){
        return Inertia::render('StudentRole/NewAppointment/Schedule');
    }
    
    public function appointmentConfirmation(){
        return Inertia::render('StudentRole/NewAppointment/Confirmation');
    }
}
