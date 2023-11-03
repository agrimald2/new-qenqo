<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','reffered_by'];

    public function activePlans()
    {
        return $this->belongsToMany(ActivePlan::class, 'active_plan_students');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function payments()
    {
        return $this->hasMany(ActivePlanPayment::class);
    }

    public function referredBy()
    {
        return $this->belongsTo(User::class, 'reffered_by');
    }

    public function assistances()
    {
        return $this->hasManyThrough(
            ActivePlanAppointmentAssistance::class,
            ActivePlanAppointment::class
        );
    }

    public function appointments()
    {
        return $this->hasManyThrough(
            ActivePlanAppointment::class,
            ActivePlanAppointmentAssistance::class,
            'student_id', // Foreign key on ActivePlanAppointmentAssistance table...
            'id', // Foreign key on ActivePlanAppointment table...
            'id', // Local key on Student table...
            'active_plan_appointment_id' // Local key on ActivePlanAppointmentAssistance table...
        );
    }
}
