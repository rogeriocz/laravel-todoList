export function mostrarAlerta(mensaje) {
    const alerta = document.querySelector("#div-alerta");

    if (!alerta) {
        const alerta = document.createElement("p");

        alerta.innerHTML = `<strong>Error!</strong>
        <span>${mensaje}</span>
        `;

        const formulario = document.querySelector("#formulario-add");
        formulario.appendChild(alerta);

        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}
