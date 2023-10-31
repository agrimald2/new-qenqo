<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivePlan extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'rate_name',
        'rate_sessions_number',
        'rate_min_people',
        'rate_max_people',
        'start_date',
        'end_date',
        'rate_freeze_days',
        'created_by',
        'subtotal',
        'total',
        'discount_code'
    ];

    public function students()
    {
        return $this->belongsToMany(Student::class, 'active_plan_students');
    }

    public function payments()
    {
        return $this->hasMany(ActivePlanPayment::class);
    }

    public function appointments()
    {
        return $this->hasMany(ActivePlanAppointment::class);
    }

    public function trainers()
    {
        return $this->belongsToMany(Student::class, 'active_plan_students');
    }
}