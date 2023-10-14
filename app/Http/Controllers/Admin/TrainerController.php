<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Trainer;
use Illuminate\Support\Facades\Hash;
use Log;

class TrainerController extends Controller
{
    public function store(Request $request){

        // Validate the request data
        $validatedData = $request->validate([
            'dni' => 'required|unique:users',
            'name' => 'required',
            'phone' => 'required',
            'username' => 'required|unique:users',
            'password' => 'required',
        ]);
    
        // Create a user with role_id 2 (that belongs to the trainer)
        $user = User::create([
            'role_id' => 2, 
            'dni' => $validatedData['dni'],
            'name' => $validatedData['name'],
            'phone' => $validatedData['phone'],
            'username' => $validatedData['username'],
            'password' => Hash::make($validatedData['password']), // Hash the password
        ]);
    
        // Create a trainer associated with the user
        $trainer = Trainer::create([
            'user_id' => $user->id,
        ]);
    
        // Return the created trainer
        return response()->json($trainer, 201);
    }

    public function getTrainers()
    {
        $rates = Trainer::with(['user'])->get();
        return response()->json($rates);
    }
}
