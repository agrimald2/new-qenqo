<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivePlanAppointmentAssistance extends Model
{
    use HasFactory;

    protected $fillable = ['active_plan_appointment_id', 'student_id'];

    public function appointment()
    {
        return $this->belongsTo(ActivePlanAppointment::class);
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}
