<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ActivePlanPayment extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'active_plan_id',
        'student_id',
        'total_payed',
        'payment_method',
        'registered_by'
    ];

    public function activePlan()
    {
        return $this->belongsTo(ActivePlan::class);
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}