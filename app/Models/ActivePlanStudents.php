<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ActivePlanStudents extends Model
{
    use HasFactory;

    protected $fillable = ['active_plan_id', 'student_id'];

    public function activePlan()
    {
        return $this->belongsTo(ActivePlan::class);
    }

    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id', 'user_id');
    }
}
