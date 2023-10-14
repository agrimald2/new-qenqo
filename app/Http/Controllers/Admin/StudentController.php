<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
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
            'username' => 'required|unique:users',
            'password' => 'required',
            'reffered_by' => 'nullable',
        ]);
    
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
        $students = Student::with('user')->get();
        return response()->json($students);
    }
}
