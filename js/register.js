let formBuscador = document.querySelector(".buscadorform");
let inputBuscador = document.querySelector(".buscador");
let mensajeError = document.querySelector(".errorbuscador");

formBuscador.addEventListener("submit", function(envio) {
    let textoBuscado = inputBuscador.value;

    if (textoBuscado === "") {
        envio.preventDefault();
        mensajeError.innerText = "El campo de búsqueda no puede estar vacío.";
    } else if (textoBuscado.length < 3) {
        envio.preventDefault();
        mensajeError.innerText = "Por favor, ingresá al menos 3 caracteres para buscar.";
    } else {
        mensajeError.innerText = "";
    }
});
