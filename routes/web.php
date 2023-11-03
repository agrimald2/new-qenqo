<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Admin\PaymentMethodController;
use App\Http\Controllers\Admin\RateController;
use App\Http\Controllers\Admin\ActivePlanController;
use App\Http\Controllers\Admin\StudentController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\ActivePlanAppointmentController;
use App\Http\Controllers\Admin\DiscountCodeController;
use App\Http\Controllers\Admin\ActivePlanPaymentController;
use App\Http\Controllers\Student\LoggedInStudentController;
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
    
    Route::get('/paymentMethods', [PaymentMethodController::class, 'index'])->name('paymentMethod.index');
    
    Route::get('/rates', [RateController::class, 'index'])->name('rate.index');
    Route::get('/activePlans', [ActivePlanController::class, 'index'])->name('activePlan.index');
    Route::get('/activePlans/{id}', [ActivePlanController::class, 'show']);
    
    
    Route::post('/activePlans', [App\Http\Controllers\Admin\ActivePlanController::class, 'store']);
    
    Route::get('/students', [StudentController::class, 'index'])->name('student.index');
    
    Route::get('/user/{id}', [UserController::class, 'showProfile'])->name('user.showProfile');
    
    Route::get('/myProfile', [UserController::class, 'myProfile']);
    
    Route::get('/activePlanAppointments/{id}', [ActivePlanAppointmentController::class, 'show']);
    
    Route::get('/appointments', [ActivePlanAppointmentController::class, 'index'])->name('appointments.index');
    
    Route::get('/payments', [ActivePlanPaymentController::class, 'index']);
    Route::get('/getPayments', [ActivePlanPaymentController::class, 'getPayments']);
    
    Route::get('/discountCodes', [DiscountCodeController::class, 'index']);
    Route::get('/getDiscountCodes', [DiscountCodeController::class, 'getDiscountCodes']);



    Route::prefix('students')->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('StudentRole/Home');
        });
        Route::get('/getLoggedInStudentInfo', [LoggedInStudentController::class, 'getLoggedInStudentInfo']);
        
        Route::get('/appointments', [LoggedInStudentController::class, 'getLoggedInStudentAppointmentsView']);
        Route::get('/getAppointments', [LoggedInStudentController::class, 'getLoggedInStudentAppointments']);
        Route::get('/showAppointment/{id}', [LoggedInStudentController::class, 'showAppointment']);
        
        Route::get('/payments', [LoggedInStudentController::class, 'getLoggedInStudentInfo']);
        
        Route::get('/activePlans', [LoggedInStudentController::class, 'getLoggedInStudentActivePlansView']);
        Route::get('/getActivePlans', [LoggedInStudentController::class, 'getLoggedInStudentActivePlans']);
        Route::get('/showActivePlan/{id}', [LoggedInStudentController::class, 'showActivePlan']);
        Route::get('/getActivePlanPayments/{id}', [LoggedInStudentController::class, 'getLoggedInStudentActivePlanPayments']);
    });

});

require __DIR__.'/auth.php';
