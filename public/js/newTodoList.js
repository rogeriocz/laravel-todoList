import {mostrarAlerta} from './funciones.js';

(function(){
    const formulario = document.querySelector('#formulario-add');
    formulario.addEventListener('submit', validarTodoList);

    function validarTodoList(e) {
        e.preventDefault();

        const name = document.querySelector('#inputName').value;

        const todolistInput = {
            name: name,
        }

       if(validar(todolistInput)) {
           console.log('Todos los campos son obligatorios');
           return;
       }

       mostrarAlerta('si paso la validación');
    }

    function validar(obj) {
        return Object.values(obj).every(input => input !== '');
    }
})();
