<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Rate;
use App\Models\ActivePlan;
use App\Models\Student;
use App\Models\ActivePlanStudents;
use Log;
use Illuminate\Support\Facades\Auth;


class ActivePlanController extends Controller
{
    public function index(){
        return Inertia::render('ActivePlan/Index');
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        
        // Validate the request data
        $validatedData = $request->validate([
            'name' => 'required',
            'rate_id' => 'required|exists:rates,id',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'subtotal' => 'required|numeric',
            'total' => 'required|numeric',
            'discount_code' => 'nullable',
            'people_number' => 'required|integer',
        ]);

        // Fetch the rate data using the rate_id
        $rate = Rate::findOrFail($validatedData['rate_id']);

        // Create an active plan with the validated data and the fetched rate data
        $activePlan = ActivePlan::create([
            'name' => $validatedData['name'],
            'rate_name' => $rate->name,
            'rate_sessions_number' => $rate->sessions_number,
            'rate_min_people' => $rate->min_people,
            'rate_max_people' => $rate->max_people,
            'start_date' => $validatedData['start_date'],
            'end_date' => $validatedData['end_date'],
            'rate_freeze_days' => $rate->max_freeze_days,
            'created_by' => $user->name, // Assuming the user is authenticated
            'subtotal' => $validatedData['subtotal'],
            'total' => $validatedData['total'],
            'discount_code' => $validatedData['discount_code'],
        ]);

        // Return the created active plan
        return response()->json($activePlan, 201);
    }

    public function getActivePlans()
    {
        $activePlans = ActivePlan::all();
        return response()->json($activePlans);
    }

    public function show($id){
        $activePlan = ActivePlan::find($id);
        return Inertia::render('ActivePlan/Show', ['activePlan' => $activePlan]);
    }

    public function getActivePlanById($id){
        $activePlan = ActivePlan::find($id);
        return response()->json($activePlan, 200);
    }
    public function addStudentToActivePlan(Request $request){
        return;
        // Validate the request data
        $validatedData = $request->validate([
            'active_plan_id' => 'required|exists:active_plans,id',
            'student_id' => 'required',
        ]);

        // Check if the student is already linked to the active plan
        $existingActivePlanStudent = ActivePlanStudents::where('active_plan_id', $validatedData['active_plan_id'])
            ->where('student_id', $validatedData['student_id'])
            ->first();

        // If the student is already linked, return an error message
        if ($existingActivePlanStudent) {
            return response()->json(['message' => 'Student is already linked to this active plan'], 400);
        }

        // Create a new ActivePlanStudents record with the validated data
        $activePlanStudent = ActivePlanStudents::create([
            'active_plan_id' => $validatedData['active_plan_id'],
            'student_id' => $validatedData['student_id'],
        ]);

        // Return the created ActivePlanStudents record
        return response()->json($activePlanStudent, 201);
    }

    public function removeStudentFromActivePlan(Request $request){
        // Validate the request data
        $validatedData = $request->validate([
            'active_plan_id' => 'required|exists:active_plans,id',
            'student_id' => 'required|exists:students,user_id',
        ]);

        // Find the ActivePlanStudents record with the validated data
        $activePlanStudent = ActivePlanStudents::where('active_plan_id', $validatedData['active_plan_id'])
            ->where('student_id', $validatedData['student_id'])
            ->first();


        // If the record exists, delete it
        if($activePlanStudent){
            $activePlanStudent->delete();
        }

        // Return a response
        return response()->json(['message' => 'Student removed from active plan'], 200);
    }

    public function getStudentsOfActivePlan($id)
    {
        // Find the ActivePlan with the given id
        $activePlan = ActivePlan::find($id);

        // If the ActivePlan exists, get its students
        if ($activePlan) {
            $students = $activePlan->students;
            // Get the user information for each student
            $userInformation = [];
            foreach ($students as $student) {
                $user = $student->user;
                $userInformation[] = [
                    'id' => $student->id,
                    'name' => $user->name,
                    'dni' => $user->dni,
                    'phone' => $user->phone,
                    'username' => $user->username,
                    // Add other desired user information fields here
                ];
            }

            return response()->json($userInformation, 200);
        }

        // If the ActivePlan does not exist, return a 404 response
        return response()->json(['message' => 'ActivePlan not found'], 404);
    }

}
