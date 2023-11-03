<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Student;
use Illuminate\Support\Facades\Hash;
use Log;

class StudentController extends Controller
{
    public function store(Request $request){
        // Validate the request data
        $validatedData = $request->validate([
            'dni' => 'required|unique:users',
            'name' => 'required',
            'phone' => 'required',
            'username' => 'nullable|unique:users',
            'password' => 'nullable',
            'reffered_by' => 'nullable',
        ]);
    
        // If username is empty, then make the username and password be like the dni
        if(empty($validatedData['username'])) {
            $validatedData['username'] = $validatedData['dni'];
            $validatedData['password'] = $validatedData['dni'];
        }

        // Create a user with role_id 3 (that belongs to the student)
        $user = User::create([
            'role_id' => 3, 
            'dni' => $validatedData['dni'],
            'name' => $validatedData['name'],
            'phone' => $validatedData['phone'],
            'username' => $validatedData['username'],
            'password' => Hash::make($validatedData['password']), // Hash the password
        ]);
    
        // Create a student associated with the user
        $student = Student::create([
            'user_id' => $user->id,
            'reffered_by' => $validatedData['reffered_by'],
        ]);
    
        // Return the created trainer
        return response()->json($student, 201);
    }

    public function getStudents()
    {
        $students = Student::with('user')->with('referredBy')->get();
        return response()->json($students);
    }

    public function index(){
        return Inertia::render('Students/Index');
    }

    public function updateRefferedBy(Request $request){
        $user_id = $request->input('user_id');
        $reffered_by = $request->input('reffered_by');
        $student = Student::where('user_id', $user_id)->first();

        $student->reffered_by = $reffered_by;
        $student->save();
    }

}
