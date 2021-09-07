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

    public function destroy($id)
    {
        $item = Item::find($id);
        if($item){
            $item->delete();
            //return ['success' => true];
            return json_encode(["msg" => "Tarea eliminada"]);
            return json_encode(['success' => true]);

        }else{
            /* return response()->json(error);
            return response()->json(null); */

        }



    }
}
