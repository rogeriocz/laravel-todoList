//Variables
const urlList = "http://localhost/todolist/list";
const formularioAgregarTodolist = document.getElementById(
    "formulario-agregar-todolist"
);
const todoList = document.getElementById("todo-list");
const templateTodoList = document.getElementById("template-todo-list");
const fragment = document.createDocumentFragment();
const btnAgregarTodo = document.getElementById("btn-agregar-todo");

let inputName = document.getElementById("inputName");
let _token = document.getElementById("token");
const completed = true;

const aplication = new (function () {
    this.lista  = todoList;
    this.name   = inputName;
    this._token = _token;
    //console.log(this._token)

    this.Leer = () => {
        let datos = "";

        fetch(urlList)
            .then((respuesta) => respuesta.json())
            .then((respuestaJson) => {
                console.log(respuestaJson);
                respuestaJson.data.map(function (pendiente, index, array) {
                    datos += "<tr>";
                    datos += "<td>" + pendiente.id + "</td>";
                    datos += "<td>" + pendiente.name + "</td>";
                    datos += "<tr>";
                });
                return (this.lista.innerHTML = datos);
            })
            .catch(console.log);
        //datos = "<tr><td>1</td><td>Proyecto 1</td><td>Editar | Eliminar</td></tr>";
    };

    this.Agregar = () => {
        let datosEnviar = {
            name: this.name.value,
        };

        const res = fetch("http://localhost/todolist/newtodo", {
            method: "POST",
            mode: "cors",
            headers: {
                "X-CSRF-TOKEN": this._token.value,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datosEnviar),
        });

        const data = res.json();
        console.log(data);
    };
})();

aplication.Leer();
