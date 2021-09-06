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
                                    <th>Item</th>
                                    <th>Status</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="todo-list">
                                <template id="template-item-tr">
                                    <tr>
                                        <td class="item-id">{id}</td>
                                        <td class="item-name">{name}</td>
                                        <td class="item-completed">{status}</td>
                                        <td>
                                            <div class="btn-group mb-2" role="group" aria-label="Basic example">
                                            <form action="{urlEdit}">
                                                <button class="btn btn-shadow btn-warning btn-sm">Editar</button>
                                            </form>
                                            <form action="{urlDelete}">
                                                <a data-id="" id="btn-delete" class="btn btn-shadow btn-danger btn-sm btnBorrar">Elimiinar</a>
                                            </form>
                                            </div>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>





    </div>


@endsection

@push('scripts')
    <script src="{{ asset('js/todolist.js') }}"></script>



@endpush
