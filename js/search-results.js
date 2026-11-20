let queryString = location.search;
let params = new URLSearchParams(queryString);
let textoBuscado = params.get("search");

let textoResultado = document.querySelector(".textoresultado");
let seccionProductos = document.querySelector(".productos");

let url = "https://dummyjson.com/products/search?q=" + textoBuscado;

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        let productos = data.products;

        if (productos.length === 0) {
            textoResultado.innerText = "No hay resultados para el término: " + textoBuscado;
            seccionProductos.innerHTML = "";
        } else {
            textoResultado.innerText = "Resultados de búsqueda para: " + textoBuscado;

            let productosHTML = "";

            for (let i = 0; i < productos.length; i++) {
                productosHTML += `
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

            seccionProductos.innerHTML = productosHTML;
        }
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });


let formBuscador = document.querySelector(".buscadorform");
let inputBuscador = document.querySelector(".buscador");
let mensajeError = document.querySelector(".errorbuscador");

formBuscador.addEventListener("submit", function(envio) {
    let valorInput = inputBuscador.value;

    if (valorInput === "") {
        envio.preventDefault();
        mensajeError.innerText = "El campo de búsqueda no puede estar vacío.";
    } else if (valorInput.length < 3) {
        envio.preventDefault();
        mensajeError.innerText = "Por favor, ingresá al menos 3 caracteres para buscar.";
    } else {
        mensajeError.innerText = "";
    }
});