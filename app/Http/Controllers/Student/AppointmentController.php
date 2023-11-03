<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\ActivePlanAppointment;
use Log;

class AppointmentController extends Controller
{

    public function getLoggedInStudentInfo(Request $request){
        $student = Auth::user()->student;
        $appointments = $student->appointments;
        $activePlans= $student->activePlans;
        $payments= $student->appointments;

        return response()->json([
            'student' => $student,
            'appointments' => $appointments,
            'activePlans' => $activePlans,
            'payments' => $payments
        ]);
    }

}
