<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class ActivePlanAppointment extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['active_plan_id', 'date', 'start_time', 'end_time'];

    public function activePlan()
    {
        return $this->belongsTo(ActivePlan::class);
    }

    public function assistances()
    {
        return $this->hasMany(ActivePlanAppointmentAssistance::class);
    }
}
