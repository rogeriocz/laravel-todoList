//Variables
const urlList = "http://localhost/todolist/list";
const formularioAgregarTodolist = document.getElementById("formulario-agregar-todolist");
const todoList = document.getElementById("todo-list");
const templateTodoList = document.getElementById("template-todo-list");
const fragment = document.createDocumentFragment();
const btnAgregarTodo = document.getElementById('btn-agregar-todo');

let inputName = document.getElementById("inputName");
let _token = document.getElementById("token");
const completed = true;


const aplication = new function(){

    this.lista = todoList;
    this.name = inputName;
    console.log(this.lista)

    this.Leer = () => {
        let datos = "";

        fetch(urlList)
        .then((respuesta) => respuesta.json())
        .then((respuestaJson) =>{
            console.log(respuestaJson)
        })
        .catch(console.log)
        //datos = "<tr><td>1</td><td>Proyecto 1</td><td>Editar | Eliminar</td></tr>";
        return this.lista.innerHTML = datos;
    }

    /* this.Agregar = () => {
        console.log(name.value);
    } */
}

aplication.Leer();
