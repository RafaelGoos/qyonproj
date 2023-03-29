<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

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


// Rota de registro
Route::post('register', [AuthController::class, 'register']);

// Rota de login
Route::post('login', [AuthController::class, 'login']);

// Rota de logout
Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:api');

// Rotas protegidas por autenticação JWT
Route::middleware(['auth:api'])->group(function () {
    // Rota para listar usuários
    Route::get('users', [UserController::class, 'index']);
});
