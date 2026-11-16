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

let queryString = location.search;
let params = new URLSearchParams(queryString);
let idProducto = params.get("id");

let url = "https://dummyjson.com/products/" + idProducto;

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        let img = document.querySelector(".productimg");
        let marca = document.querySelector(".marca");
        let modelo = document.querySelector(".modelo");
        let linkCategoria = document.querySelector(".link-categoria");
        let precio = document.querySelector(".precio");
        let stock = document.querySelector(".stock");
        let descripcion = document.querySelector(".descripcion");

        img.src = data.thumbnail;
        img.alt = data.title;

        if (data.brand) {
            marca.innerText = data.brand;
        } else {
            marca.innerText = "Genérica";
        }

        modelo.innerText = data.title;

        linkCategoria.innerText = data.category;
        linkCategoria.href = "./category.html?category=" + data.category;

        precio.innerText = "$" + data.price;
        stock.innerText = "Stock: " + data.stock;
        descripcion.innerText = data.description;

        let listaTags = document.querySelectorAll(".tagsul .tags");

        for (let i = 0; i < listaTags.length; i++) {
            if (data.tags[i]) {
                listaTags[i].innerText = data.tags[i];
            } else {
                listaTags[i].style.display = "none";
            }
        }

        let secciones = document.querySelectorAll(".productsection");
        let seccionComentarios = secciones[1];

        let comentariosHTML = "<h2>Comentarios</h2>";
        let reviews = data.reviews;

        for (let i = 0; i < reviews.length; i++) {
            let fechaLimpia = reviews[i].date.slice(0, 10);

            comentariosHTML += `
                <div class="comentarios">
                    <div class="comentario1">
                        <p class="fecha">${fechaLimpia}</p>
                        <p class="nombre"><b>${reviews[i].reviewerName}</b></p>
                        <p>Rating: ${reviews[i].rating} / 5 ⭐</p>
                        <p class="opinion">${reviews[i].comment}</p>
                    </div>
                </div>
            `;
        }

        seccionComentarios.innerHTML = comentariosHTML;
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });