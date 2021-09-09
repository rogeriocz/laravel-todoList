//Variables
const urlList = "http://localhost/api/items";
const formularioAgregarTodolist = document.getElementById("formulario-add");
const todoList = document.getElementById("todo-list");
const btnAgregarTodo = document.getElementById("btn-agregar-todo");
let inputName = document.getElementById("inputName");
let _token = document.getElementById("token");
const completed = true;
const tmpl = document.getElementById("template-item-tr").content;
const fragment = document.createDocumentFragment();
const btnDelete = document.getElementById('btn-delete');



document.addEventListener("DOMContentLoaded", () => {
    // MUESTRA LISTA DE TODOLIST
    fetchDataLeer();
});

formularioAgregarTodolist.addEventListener("submit", function(event) {
    event.preventDefault();
    addTodo();
});

/* btnDelete.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(btnDelete);
    //deleteItem();
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

/**
 * lee los elemntos de la tabla por medio de la clase btnBorrar
 * y mostramos el id de la fila para eliminarlos desde la funcion deleteItem(id);
 */
 const on = (element, event, selector, handler) => {
    console.log(event)

    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
 on(document, 'click', '.btnBorrar', e => {
    const form = e.target.parentNode
    const fila  = form.firstElementChild
    const id = fila.getAttribute('data-id')
    console.log(id)

    deleteItem(id);
 });

/**
 * Funcion para eliminar items
 *
 */
 async function deleteItem(id) {
   await fetch("/items/" + id, {
        method: "POST",
        mode: "cors",
        headers: {
            "X-CSRF-TOKEN": _token.value,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            _method: "DELETE"
        })
    })
        .then( res => res.text())
        .then( response => {
            console.log(response);
        })
        .catch( error => {
            console.error('Hay un error:');
            console.error(error);
        });
        fetchDataLeer();
    }


/**
 * Hace una petición a la API para obtener la lista  de items
 * y mostrarlos al usuario.
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
        tmpl.querySelector('#btn-delete').dataset.id = item.id;
        tmpl.querySelector('.item-name').textContent = item.name;
        tmpl.querySelector('.item-completed').textContent = item.completed;
        let $clone = document.importNode(tmpl, true);

        fragment.appendChild($clone);
    });
    todoList.appendChild(fragment);



}
