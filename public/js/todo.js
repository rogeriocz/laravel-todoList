//Variables
const urlList = "http://localhost/todolist/list";
const formularioAgregarTodolist = document.getElementById("formulario-agregar-todolist");
const todoList = document.getElementById("todo-list");
const templateTodoList = document.getElementById("template-todo-list");
const fragment = document.createDocumentFragment();
const btnAgregarTodo = document.getElementById('btn-agregar-todo');

let title = document.getElementById("inputTitle");
let _token = document.getElementById("token");
const completed = true;


// formularioAgregarTodolist.forEach(element => console.log(element));

formularioAgregarTodolist.addEventListener('submit', function(event){
    event.preventDefault();
    addTodo();
    // DESPUES DE CREAR UN REGISTRO NUEVO


});

// MUESTRA LISTA DE TODOLIST
listTodo()


//Agregar nueva Todo List
async function addTodo() {
    let obj = {
        title: title.value,
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
    data.listTodo();
    console.log(data);
    clearInput();

}
// LIMPIAR INPUT TITLE
function clearInput() {
    title.value = "";
}



//traer lista de tareas
async function listTodo() {

    const res = await fetch(urlList)
    // Promesa la respuesta y convertirla a JSON
    .then((respuesta) => respuesta.json())
    // JSON -> Data -> Renderiza informacion del navegador
    .then((responseJson) => {
        responseJson.data.forEach((item) => {
            const title = document.createElement("h2");
            todoList.appendChild(title);
            title.textContent = item.title;
        })
    });
}
