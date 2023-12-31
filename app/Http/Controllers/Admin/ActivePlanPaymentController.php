<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ActivePlan;
use App\Models\ActivePlanPayment;
use Illuminate\Support\Facades\Auth;
use Log;
use Inertia\Inertia;

class ActivePlanPaymentController extends Controller
{
    public function index(){
        return Inertia::render('Payments/Index');
    }

    public function store(Request $request){
        Log::debug($request);
        $user = Auth::user();
        $user_name = 'NO';
        if($user){
            $user_name = $user->name;
        }

        $request->validate([
            'payment_method' => 'required|string',
            'total_payed' => 'required|numeric',
            'student_id' => 'required|integer',
            'active_plan_id' => 'required|integer',
        ]);
    
        $payment = ActivePlanPayment::create([
            'active_plan_id' => $request->active_plan_id,
            'student_id' => $request->student_id,
            'total_payed' => $request->total_payed,
            'payment_method' => $request->payment_method,
            'registered_by' => $user_name,
        ]);
    
        $activePlan = ActivePlan::find($request->active_plan_id);
        $activePlan->total_payed += $request->total_payed;
        $activePlan->save();
    
        return response()->json($payment, 201);
    }
    
    public function deletePayment($id){
        $payment = ActivePlanPayment::findOrFail($id);
        $activePlan = ActivePlan::find($payment->active_plan_id);
        $activePlan->total_payed -= $payment->total_payed;
        $activePlan->save();
    
        $payment->delete();
    
        return response()->json(null, 204);
    }

    public function getPaymentsFromActivePlan($id){
        $payments = ActivePlanPayment::where('active_plan_id', $id)->with(['student.user'])->get();
        return response()->json($payments);
    }

    public function getPayments(Request $request){
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');

        $query = ActivePlanPayment::with(['student.user', 'student.referredBy', 'activePlan']);

        if ($startDate && $endDate) {
            $query->whereBetween('created_at', [$startDate, $endDate]);
        }

        $payments = $query->get();
        return response()->json($payments);
    }
}
