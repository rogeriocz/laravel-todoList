@extends('layouts.dashboardkit')

@section('content')

    <div class="row">
        <!--begin::Col-->
        <div class="col-xl-6 col-lg-6 col-md-6">
            <!--begin::List Widget 3-->
            <div class="card card-xl-stretch mb-5 mb-xl-4">
                <!--begin::Header-->
                <div class="card-header border-0">
                    <h3 class="card-title fw-bolder text-dark">Todo</h3>
                    <div class="card-toolbar"></div>
                </div>
                <!--end::Header-->
                <!--begin::Body-->
                <div class="card-body pt-2">
                    <!--begin::Item-->
                    <div id="todo-list" class="mb-3">

                    </div>
                </div>
                <!--end::Body-->
            </div>
            <!--end:List Widget 3-->
        </div>
        <!--end::Col-->


        <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="card card-bordered">
                <div class="card-header">
                    <h3 class="card-title">Nueva tarea</h3>
                    <div class="card-toolbar"></div>
                </div>
                <form id="formulario-agregar-todolist">
                    <div class="card-body">
                        <input type="hidden" id="token" name="_token" value="{{ csrf_token() }}" class="form-control" />
                        <input id="inputTitle" type="text" class="form-control" placeholder="Title" />
                    </div>
                    <div class="card-footer">
                        <button id="btn-agregar-todo" class="btn btn-light-success">Agregar</button>
                    </div>
                </form>
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
    <script src="{{ asset('js/todo.js') }}"></script>


@endpush
