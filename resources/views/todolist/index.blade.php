@extends('layouts.dashboardkit')

@section('content')

<div class="row">

     {{-- FORMULARIO PARA AGREGAR REGISTROS A TODOLIST --}}
     <div class="col-xl-4 col-lg-4 col-md-4">
        <div class="card card-bordered">
            <div class="card-header">
                <h3 class="card-title">Nuevo</h3>
                <div class="card-toolbar"></div>
            </div>
            <form id="formulario-add">
                <div class="card-body">
                    <input type="hidden" id="token" name="_token" value="{{ csrf_token() }}" class="form-control" />
                    <input id="inputName" type="text" class="form-control" placeholder="Title" />
                </div>
                <div id="div-alerta"></div>
                <div class="card-footer">
                    <button id="btn-agregar-todo" class="btn btn-light-success">Agregar</button>
                </div>
            </form>
        </div>
    </div>

    {{-- LISTA DE REGISTROS TODOLIST --}}
        <div class="col-xl-8 col-lg-8 col-md-8">
            <div class="card card-xl-stretch mb-5 mb-xl-4">
                <div class="card-header border-0">
                    <h3 class="card-title fw-bolder text-dark">Todo List</h3>
                    <div class="card-toolbar"></div>
                </div>
                <div class="card-body pt-2">
                    <div class="mb-3">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="todo-list">

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>



    </div>







    {{-- template-todo-list --}}
    {{-- <template id="template-todo-list">
        <div class="d-flex align-items-center mb-8">

            <span class="bullet bullet-vertical h-40px bg-success"></span>
            <div class="form-check form-check-custom form-check-solid mx-5">
                <input class="form-check-input" type="checkbox" value="" />
            </div>
            <div class="flex-grow-1">
                <a href="#" class="text-gray-800 text-hover-primary fw-bolder fs-6">tarea 1</a>
                <span class="text-muted fw-bold d-block">Due in 2 Days</span>
            </div>

            <a href="#" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-dark btn-active-light-dark">Edit</a>

        </div>
    </template> --}}


@endsection

@push('scripts')
    <script src="{{ asset('js/index.js') }}" type="module"></script>
    <script src="{{ asset('js/nuevocliente.js')}}" type="module"></script>


@endpush
