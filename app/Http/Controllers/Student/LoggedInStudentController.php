<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\ActivePlanAppointment;
use App\Models\ActivePlanAppointmentAssistance;
use App\Models\ActivePlan;
use App\Models\ActivePlanPayment;
use Log;
use DB;
use Inertia\Inertia;

class LoggedInStudentController extends Controller
{

    public function getLoggedInStudentInfo(Request $request){
        $student = Auth::user()->student;
        $appointments = $student->appointments;
        $activePlans= $student->activePlans;
        $payments= $student->payments;

        return response()->json([
            'student' => $student,
            'appointments' => $appointments,
            'activePlans' => $activePlans,
            'payments' => $payments
        ]);
    }


    public function getLoggedInStudentAppointments(Request $request){
        $student = Auth::user()->student;
        $appointments = $student->appointments;
        
        $start_date = $request->get('start_date');
        $end_date = $request->get('end_date');
        
        $status = $request->get('status');
        $statusLabel = is_array($status) && isset($status['label']) ? $status['label'] : null;
        
        // Apply date filter if provided
        if ($request->has('start_date') && $request->has('end_date')) {
            $appointments = $appointments->whereBetween('date', [$request->start_date, $request->end_date]);
        }

        // Apply status filter if provided
        if ($request->has('status')) {
            $appointments = $appointments->where('status', $statusLabel);
        }

        return response()->json($appointments);
    }

    public function getLoggedInStudentAppointmentsView(){
        return Inertia::render('StudentRole/Appointment/Index');
    }

    public function showAppointment($id){
        $appointment = ActivePlanAppointment::with(['activePlan', 'assistances.student.user'])->find($id);
        $student = Auth::user()->student;
        $assistance = ActivePlanAppointmentAssistance::where('active_plan_appointment_id', $appointment->id)
            ->where('student_id', $student->id)
            ->first();
        
            if (!$appointment) {
            return redirect()->back()->with('error', 'Appointment not found');
        }

        return Inertia::render('StudentRole/Appointment/Show', [
            'appointment' => $appointment,
            'student' => $student,
            'assistance' => $assistance
        ]);
    }

    public function getLoggedInStudentActivePlansView(){
        return Inertia::render('StudentRole/ActivePlan/Index');
    }

    public function getLoggedInStudentActivePlans(Request $request){
        $student = Auth::user()->student;
        $activePlans = $student->activePlans;
        
        return response()->json($activePlans);
    }

    public function showActivePlan($id){
        $activePlan = ActivePlan::find($id);
        return Inertia::render('StudentRole/ActivePlan/Show', ['activePlan' => $activePlan]);
    }

    public function getLoggedInStudentActivePlanPayments($id){
        Log::debug($id);
        $student = Auth::user()->student;

        $activePlanPayments = ActivePlanPayment::where('active_plan_id', $id)
            ->where('student_id', $student->id)
            ->get();
        
        return response()->json($activePlanPayments);
    }
}
