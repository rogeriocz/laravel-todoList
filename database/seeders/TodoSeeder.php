<?php

namespace Database\Seeders;

use App\Models\Todolist;
use Illuminate\Database\Seeder;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Todolist::create(['name' => "Estudiar JavaScript", 'completed' => true]);
        Todolist::create(['name' => "Terminar proyecto 1", 'completed' => true]);

    }
}
