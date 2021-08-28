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

        Todolist::create(['title' => "Estudiar JavaScript", 'completed' => true]);
        Todolist::create(['title' => "Terminar proyecto 1", 'completed' => true]);

    }
}
