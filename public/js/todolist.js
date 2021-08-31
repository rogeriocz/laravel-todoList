//Variables
const urlList = "http://localhost/todolist/list";
const formularioAgregarTodolist = document.getElementById("formulario-add");
const todoList = document.getElementById("todo-list");
const templateTodoList = document.getElementById("template-todo-list");
const fragment = document.createDocumentFragment();
const btnAgregarTodo = document.getElementById('btn-agregar-todo');
let lists = {};
let inputName = document.getElementById("inputName");
let _token = document.getElementById("token");
const completed = true;
let resultados = ''



document.addEventListener('DOMContentLoaded', () => {
    // MUESTRA LISTA DE TODOLIST
    fetchDataLeer()
});


formularioAgregarTodolist.addEventListener('submit', function(event){
    event.preventDefault();
    addTodo();

});




//Agregar nueva Todo List
async function addTodo() {
    let obj = {
        name: inputName.value,
    };
    const res = await fetch("http://localhost/todolist/newtodo", {
        method: "POST",
        mode: "cors",
        headers: {
            "X-CSRF-TOKEN": _token.value,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    });

    const data = await res.json();
    console.log(data);
    clearInput();
    fetchDataLeer()

}

function clearInput() {
    inputName.value = "";
}


//NUEVO FETCH DATA PARA OBTENER LOS DATOS DE LA BASE DE DATOS
const fetchDataLeer = async () => {
    try {
        const res = await fetch(urlList)
        .then(respuesta => respuesta.json())
        // JSON -> Data -> Renderiza informacion del navegador
        .then(responseJson => {
            todoList.innerHTML = "";

            responseJson.data.forEach((item) => {
                const name = document.createElement("h2");
                todoList.appendChild(name);
                name.textContent = item.name;
            })
        });
    } catch (error) {
        console.log(error)
    }
}


