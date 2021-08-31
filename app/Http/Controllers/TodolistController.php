<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TodolistController extends Controller
{
    public function index()
    {
        $todolists = Item::orderBy('id', 'desc')->get();
        return view('todolist.index', compact('todolists'));

    }

    public function list()
    {
        $todolists = Item::orderBy('id', 'desc')->get();

        $response['data'] = $todolists;

        return response()->json($response);
    }


    public function store(Request $request)
    {
        $completed = true;

        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        if($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages()
            ]);
        }else{
            $todo = new Item();
            $todo->name = $request->input('name');
            $todo->completed = $completed;
            $todo->save();

            return json_encode(["msg" => "Tarea agregada"]);
        }

    }

    public function update(Request $request)
    {
        $updateTodo = Item::find($request->id);
        $updateTodo->update(['title' => $request->title]);


        return $updateTodo;
    }


}
