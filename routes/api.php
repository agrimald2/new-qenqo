<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\RateTypeController;
use App\Http\Controllers\Admin\RateController;
use App\Http\Controllers\Admin\FamilyController;
use App\Http\Controllers\Admin\PaymentMethodController;
use App\Http\Controllers\Admin\TrainerController;
use App\Http\Controllers\Admin\StudentController;
use App\Http\Controllers\Admin\DiscountCodeController;
use App\Http\Controllers\Admin\ActivePlanController;
use App\Http\Controllers\Admin\ActivePlanPaymentController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\ActivePlanAppointmentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/family', [FamilyController::class, 'store'])->name('family.store');
Route::get('/families', [FamilyController::class, 'get'])->name('families.get');

Route::post('/rates', [RateController::class, 'store']);
Route::delete('/rates/{id}', [RateController::class, 'destroy']);
Route::get('/rates', [RateController::class, 'getRates']);

Route::get('/rateTypes', [RateTypeController::class, 'getRateTypes']);

Route::get('/getPaymentMethods', [PaymentMethodController::class, 'getPaymentMethods']);
Route::post('/paymentMethods', [PaymentMethodController::class, 'store']);
Route::put('/paymentMethods/{id}', [PaymentMethodController::class, 'update']);
Route::delete('/paymentMethods/{id}', [PaymentMethodController::class, 'delete']);

Route::post('/trainers', [TrainerController::class, 'store']);
Route::get('/getTrainers', [TrainerController::class, 'getTrainers']);

Route::post('/students', [StudentController::class, 'store']);
Route::get('/students', [StudentController::class, 'getStudents']);

Route::post('/discountCodes', [DiscountCodeController::class, 'store']);
Route::get('/discountCodes', [DiscountCodeController::class, 'getDiscountCodes']);
Route::put('/discountCodes/{id}', [DiscountCodeController::class, 'update']);
Route::get('/discountCodes/{code}', [DiscountCodeController::class, 'getDiscountCodeByCode']);


Route::post('/activePlans', [ActivePlanController::class, 'store']);
Route::get('/activePlans', [ActivePlanController::class, 'getActivePlans']);
Route::post('/activePlans/{id}/students', [ActivePlanController::class, 'addStudentToActivePlan']);
Route::get('/activePlans/{id}/students', [ActivePlanController::class, 'getStudentsOfActivePlan']);
Route::get('/activePlans/getById/{id}', [ActivePlanController::class, 'getActivePlanById']);

Route::post('/activePlans/delete/student', [ActivePlanController::class, 'removeStudentFromActivePlan']);

Route::post('/activePlanPayment', [App\Http\Controllers\Admin\ActivePlanPaymentController::class, 'store']);
Route::delete('/activePlanPayments/{id}', [App\Http\Controllers\Admin\ActivePlanPaymentController::class, 'deletePayment']);
Route::get('/activePlanPayments/{id}', [App\Http\Controllers\Admin\ActivePlanPaymentController::class, 'getPaymentsFromActivePlan']);

Route::put('/user/{id}/information', [UserController::class, 'updateUserInformation']);
Route::put('/user/{id}/password', [UserController::class, 'updateUserPassword']);



Route::put('/student/{id}/updateRefferedBy', [StudentController::class, 'updateRefferedBy']);

Route::get('/activePlans/appointments/{id}', [ActivePlanController::class, 'getActivePlanAppointments']);

Route::post('/activePlanAppointments', [ActivePlanAppointmentController::class, 'store']);



Route::get('/getAppointments', [ActivePlanAppointmentController::class, 'getAppointments']);



Route::post('/activePlanAppointment/markStudentAssistance', [ActivePlanAppointmentController::class, 'appoinmentAssisted']);


Route::get('/getPayments', [ActivePlanPaymentController::class, 'getPayments']);


