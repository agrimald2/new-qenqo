<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Rate extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'family_id',
        'name',
        'description',
        'sessions_number',
        'min_people',
        'max_people',
        'price',
        'comission',
        'days_duration',
        'atropomedic_evaluation',
        'max_freeze_days',
    ];

    public function family()
    {
        return $this->belongsTo(Family::class);
    }
}
