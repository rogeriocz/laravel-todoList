//Variables
const urlList = "http://localhost/items/list";
const formularioAgregarTodolist = document.getElementById("formulario-add");
const todoList = document.getElementById("todo-list");
const btnAgregarTodo = document.getElementById("btn-agregar-todo");
let inputName = document.getElementById("inputName");
let _token = document.getElementById("token");
const completed = true;
const tmpl = document.getElementById("template-item-tr").content;
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", () => {
    // MUESTRA LISTA DE TODOLIST
    fetchDataLeer();
});

formularioAgregarTodolist.addEventListener("submit", function(event) {
    event.preventDefault();
    addTodo();
});

/* btnEliminarTodo.addEventListener("click", function(event) {
    event.preventDefault();
    deleteItem();
}); */

//Agregar nueva Todo List
async function addTodo() {
    let obj = {
        name: inputName.value
    };

    // URL completa
    // /items ->   doominioActual/items (indeppendientemente ddde dónde esttés)
    // items -> / -> pero si estás en oraaa ruta /abc -> /abc/items
    const res = await fetch("http://localhost/items", {
        method: "POST",
        mode: "cors",
        headers: {
            "X-CSRF-TOKEN": _token.value,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    });

    const data = await res.json();
    console.log(data);
    clearInput();
    fetchDataLeer();
}

function clearInput() {
    inputName.value = "";
}

// Eliminar item
/* let itemId = 1;

async function deleteItem(itemId) {
    const res = await fetch("http://localhost/items/" + itemId, {
        method: "POST",
        mode: "cors",
        headers: {
            "X-CSRF-TOKEN": _token.value,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            _method: "PUT"
        })
    })
        .then(res => res.json())
        .then(response => {
            console.log(response);
        });

    fetchDataLeer();
} */

/**
 * Hace una petición a la API pppara obtener la lista  de items
 * y mostrarlos al usuarioo.
 */

const fetchDataLeer = async () => {
    try {
        const res = await fetch(urlList)
            .then(respuesta => respuesta.json())
            // JSON -> Data -> Renderiza informacion del navegador
            .then(responseItemJson => {
                todoList.innerHTML = "";

                renderItem(responseItemJson)
            });
    } catch (error) {
        console.log(error);
    }
};

/**
 * Se encarga de presentar un  item en la intefaz de usuario.
 */
function renderItem(responseItemJson) {


    responseItemJson.data.forEach(item => {
        //tmpl.querySelector("td").textContent = item.id;
        tmpl.querySelector('.item-id').textContent = item.id;
        tmpl.querySelector('.item-name').textContent = item.name;
        tmpl.querySelector('.item-completed').textContent = item.completed;
        let $clone = document.importNode(tmpl, true);

        fragment.appendChild($clone);
    });
    todoList.appendChild(fragment);



}
