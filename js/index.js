let url = "https://dummyjson.com/products/category/smartphones";


fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let smartphones = data.products;


        let tarjetas = document.querySelectorAll(".productos .producto");


        for (let i = 0; i < tarjetas.length; i++) {
            if (smartphones[i]) {
                let img = tarjetas[i].querySelector(".productoimg");
                let titulo = tarjetas[i].querySelector(".phonetitle");
                let parrafo = tarjetas[i].querySelector(".phoneparafo");
                let precio = tarjetas[i].querySelector(".phoneprecio");
                let linkDetalle = tarjetas[i].querySelector(".verdetalle");


                img.src = smartphones[i].thumbnail;
                img.alt = smartphones[i].title;
                titulo.innerText = smartphones[i].title;
                parrafo.innerText = smartphones[i].description;
                precio.innerText = "$" + smartphones[i].price;
                linkDetalle.href = "./product.html?id=" + smartphones[i].id;
            }
        }
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });









    let url1 = "https://dummyjson.com/products/category/groceries";


    fetch(url1)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let groceries = data.products;
        console.log(groceries)

        let tarjetas1 = document.querySelectorAll(".productos1 .producto1");


        for (let i = 0; i < tarjetas1.length; i++) {
            if (groceries[i]) {
                let img1 = tarjetas1[i].querySelector(".productoimg1");
                let titulo1 = tarjetas1[i].querySelector(".phonetitle1");
                let parrafo1 = tarjetas1[i].querySelector(".phoneparafo1");
                let precio1 = tarjetas1[i].querySelector(".phoneprecio1");
                let linkDetalle1 = tarjetas1[i].querySelector(".verdetalle1");


                img1.src = groceries[i].thumbnail;
                img1.alt = groceries[i].title;
                titulo1.innerText = groceries[i].title;
                parrafo1.innerText = groceries[i].description;
                precio1.innerText = "$" + groceries[i].price;
                linkDetalle1.href = "./product.html?id=" + groceries[i].id;
            }
        }
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