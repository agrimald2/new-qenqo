<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Admin\RateController;
use App\Http\Controllers\Admin\ActivePlanController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::get('/dashboard', function () {
    return Inertia::render('HomeView');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/user-information', [DashboardController::class, 'getAuthUserInformation'])->name('user.information');
    
    Route::get('/rates', [RateController::class, 'index'])->name('rate.index');
    Route::get('/activePlans', [ActivePlanController::class, 'index'])->name('activePlan.index');
    Route::get('/activePlans/{id}', [ActivePlanController::class, 'show']);
    
    Route::post('/activePlans', [App\Http\Controllers\Admin\ActivePlanController::class, 'store']);
});

require __DIR__.'/auth.php';
