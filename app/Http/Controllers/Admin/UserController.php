<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Student;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class UserController extends Controller
{
    public function showProfile($id){
        $user = User::find($id);
        $user->load('role');
        $user->load('student.referredBy');
        return Inertia::render('User/Profile', ['user' => $user]);
    }

    public function updateUserInformation(Request $request){
        $user_id = $request->input('user_id');
        $name = $request->input('name');
        $username = $request->input('username');
        $dni = $request->input('dni');
        $phone = $request->input('phone');
        
        $user = User::find($user_id);
        $user->name = $name;
        $user->username = $username;
        $user->dni = $dni;
        $user->phone = $phone;
        $user->save();
    }

    public function updateUserPassword(Request $request){
        $user_id = $request->input('user_id');
        $password = $request->input('password');
        
        $user = User::find($user_id);
        $user->password = Hash::make($password);
        $user->save();
    }
}
