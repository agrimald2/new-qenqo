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
        'rate_type_id',
        'price',
        'comission',
        'days_duration',
        'max_freeze_days',
    ];

    public function family()
    {
        return $this->belongsTo(Family::class);
    }

    public function rateType()
    {
        return $this->belongsTo(RateType::class);
    }
}
