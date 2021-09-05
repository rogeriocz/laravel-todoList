<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index(){
        $items = Item::orderBy('id', 'desc')->get();

        $response['data'] = $items;

        return response()->json($response);
    }
}
