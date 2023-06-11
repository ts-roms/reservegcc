<?php

use App\Http\Controllers\ProfileController;
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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard/index');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/admin/services', function () {
    return Inertia::render('Admin/Services/index');
})->middleware(['auth', 'verified'])->name('services');

Route::get('/admin/orders', function () {
    return Inertia::render('Admin/Orders/index');
})->middleware(['auth', 'verified'])->name('orders');

Route::get('/admin/schedules', function () {
    return Inertia::render('Admin/Scheduler/index');
})->middleware(['auth', 'verified'])->name('schedules');




Route::get('/help', function () {
    return Inertia::render('HelpPage');
})->name('help');

Route::get('/faq', function () {
    return Inertia::render('FAQPage');
})->name('faq');

Route::get('/privacy', function () {
    return Inertia::render('PrivacyPolicyPage');
})->name('privacy');

Route::get('/terms-and-conditions', function () {
    return Inertia::render('TermsAndConditionsPage');
})->name('terms-and-conditions');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
