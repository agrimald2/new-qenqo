<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ActivePlanTrainers extends Model
{
    use HasFactory;

    protected $fillable = ['active_plan_id', 'trainer_id'];


    public function activePlan()
    {
        return $this->belongsTo(ActivePlan::class);
    }

    public function trainers()
    {
        return $this->belongsTo(Student::class, 'student_id', 'user_id');
    }
}
