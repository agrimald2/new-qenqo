<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ActivePlanAppointment;
use App\Models\ActivePlanAppointmentAssistance;
use App\Models\ActivePlan;
use App\Models\Student;
use Log;
use DB;
use Inertia\Inertia;

class ActivePlanAppointmentController extends Controller
{
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
}
