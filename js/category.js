let queryString = location.search;
let params = new URLSearchParams(queryString);
let categoriaElegida = params.get("category");

let url = "https://dummyjson.com/products/category/" + categoriaElegida;

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        let productos = data.products;

        let seccionProductos = document.querySelector(".productos");

        let contenidoHTML = `<h2 class="titulo-categoria">${categoriaElegida}</h2>`;

        for (let i = 0; i < productos.length; i++) {
            contenidoHTML += `
                <article class="producto">
                    <div class="productodiv">
                        <img src="${productos[i].thumbnail}" alt="${productos[i].title}" class="productoimg">
                        <h3 class="phonetitle">${productos[i].title}</h3>
                        <p class="phoneparafo">${productos[i].description}</p>
                        <h3 class="phoneprecio">$${productos[i].price}</h3>
                        <a href="./product.html?id=${productos[i].id}" class="verdetalle"> Ver Detalles </a>
                    </div>
                </article>
            `;
        }

        seccionProductos.innerHTML = contenidoHTML;
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });


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