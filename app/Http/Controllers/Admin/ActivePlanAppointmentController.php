<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ActivePlanAppointment;
use App\Models\ActivePlanAppointmentAssistance;
use App\Models\ActivePlan;
use App\Models\Student;
use Illuminate\Support\Facades\Auth;
use Log;
use DB;
use Inertia\Inertia;

class ActivePlanAppointmentController extends Controller
{
    public function index(){
        return Inertia::render('Appointment/Index');
    }

    public function store(Request $request){
        try {
            \DB::beginTransaction();
            $appointment = ActivePlanAppointment::create($request->all());

            $activePlan = ActivePlan::find($request->active_plan_id);
            $students = $activePlan->students;

            foreach($students as $student){
                ActivePlanAppointmentAssistance::create([
                    'active_plan_appointment_id' => $appointment->id,
                    'student_id' => $student->id
                ]);
            }
            \DB::commit();
        } catch (\Exception $e) {
            \DB::rollback();
            Log::error($e->getMessage());
            throw $e;
        }
    }

    public function show($id)
    {
        $appointment = ActivePlanAppointment::with(['activePlan', 'assistances.student.user'])->find($id);

        if (!$appointment) {
            return redirect()->back()->with('error', 'Appointment not found');
        }

        return Inertia::render('Appointment/Show', ['appointment' => $appointment]);
    }

    public function getAppointments(Request $request){
        $start_date = $request->get('start_date');
        $end_date = $request->get('end_date');
        $activePlan = $request->get('active_plan');
        $status = $request->get('status');

        $appointments = ActivePlanAppointment::with('activePlan', 'assistances.student');

        if($start_date){
            $appointments->whereDate('date', '>=', $start_date);
        }
        if($end_date){
            $appointments->whereDate('date', '<=', $end_date);
        }
        if($activePlan){
            $appointments->where('active_plan_id', $activePlan);
        }
        if($status){
            $appointments->where('status', $status);
        }

        $appointments = $appointments->get();

        foreach($appointments as $appointment){
            $appointment->pendiente_count = $appointment->assistances->where('status', 'Pendiente')->count();
            $appointment->confirmado_count = $appointment->assistances->where('status', 'Confirmado')->count();
            $appointment->no_asistira_count = $appointment->assistances->where('status', 'No Asistirá')->count();
            $appointment->no_asistio_count = $appointment->assistances->where('status', 'No Asistió')->count();
            $appointment->asistio_count = $appointment->assistances->where('status', 'Asistió')->count();
        }

        return response()->json($appointments);
    }

    public function confirmAssistance(Request $request){
        $validatedData = $request->validate([
            'active_plan_appointment_id' => 'required',
            'student_id' => 'required',
        ]);

        $status = 'Confirmado';
    }

    public function unConfirmAssistance(Request $request){
        $validatedData = $request->validate([
            'active_plan_appointment_id' => 'required',
            'student_id' => 'required',
        ]);

        $status = 'No Asistirá';
    }
    
    public function appoinmentAssisted(Request $request){
        $validatedData = $request->validate([
            'active_plan_appointment_id' => 'required',
            'student_id' => 'required',
        ]);
    
        $status = 'Confirmado';

        $assistance = ActivePlanAppointmentAssistance::where('active_plan_appointment_id', $validatedData['active_plan_appointment_id'])
        ->where('student_id', $validatedData['student_id'])
        ->first();

        $assistance->status = $status;
        $assistance->save();
        return;
    }


}
