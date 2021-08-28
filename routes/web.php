<?php

use App\Http\Controllers\TodolistController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';

//CRUD DE PRACTICA CON FETCH JAVASCRIPT

Route::get('todolist/template', [TodolistController::class, 'template'])->name('template');
Route::get('todolist/list', [TodolistController::class, 'list'])->name('list');
Route::get('todolist', [TodolistController::class, 'index'])->name('todolist.index');
Route::post('todolist/newtodo', [TodolistController::class, 'store'])->name('todolist.store');
Route::put('todolist/updatetodolist/{id}', [TodolistController::class, 'update'])->name('todolist.update');
Route::delete('todolist/deletetodolist/{id}', [TodolistController::class, 'delete'])->name('todolist.delete');
