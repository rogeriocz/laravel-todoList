<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    /**
     * Muestra la vista index del todoList
     *
     *
     */
    public function index()
    {

        return view('todolist.index');

    }

    /**
     * Función para crear nuevos items.
     *
     * returna mensaje en formato json
     */
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
            $item = new Item();
            $item->name = $request->input('name');
            $item->completed = $completed;
            $item->save();

            return json_encode(["msg" => "Tarea agregada"]);
        }

    }

    /**
     * Función para actualizar items.
     *
     * returna mensaje en formato json
     */
    public function update(Request $request, $id)
    {
       $item = Item::find($id);
        $item->name = $request->name;
        $item->save();

        return json_encode(["msg" => "Tarea Actualizada"]);
    }

    /**
     * Función para eliminar items.
     */
    public function destroy($id)
    {
        $item = Item::find($id);
        $item->delete();

        return json_encode(["msg" => "Tarea eliminada"]);
        return (['success' => true]);
    }
}
