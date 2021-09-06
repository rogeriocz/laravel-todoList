<?php

use App\Http\Controllers\ItemController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');


//CRUD DE PRACTICA CON FETCH JAVASCRIPT
Route::group(['middleware' => ['auth']], function () {


    Route::get('items/list', [ItemController::class, 'viewList']);

    Route::get('items', [ItemController::class, 'index'])->name('items.index');
    Route::post('items', [ItemController::class, 'store'])->name('items.store');
    Route::put('items/{item}', [ItemController::class, 'update'])->name('items.update');
    Route::delete('items/{id}', [ItemController::class, 'destroy'])->name('items.delete');



});

// <form action="{{ url('items/'.$iteem->id) }}
// <form action="{{ route('items.update', ['item' => $item->id]) }}

require __DIR__.'/auth.php';
