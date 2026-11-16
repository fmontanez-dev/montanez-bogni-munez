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
            }
        }
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });