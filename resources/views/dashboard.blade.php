<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
            <br>
            <a href="{{route('items.index')}}" target="_blank" rel="noopener noreferrer">TodoList</a>
        </h2>
    </x-slot>


</x-app-layout>
{{-- @include('layouts.navigation'); --}}
