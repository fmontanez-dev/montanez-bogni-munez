let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idProduct = queryStringObj.get("id")
let url = `https://dummyjson.com/products/${idProduct}`;
fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        let nombre = document.querySelector(".nombre")
        nombre.innerText = data.title
        let marca = document.querySelector(".marca")
        marca.innerText = data.brand
        let precio = document.querySelector(".precio")
        precio.innerText = data.price
        let stock = document.querySelector(".stock")
        stock.innerText = data.stock
        let desc = document.querySelector(".descripcion")
        desc.innerText = data.description
        let tags = document.querySelector(".tags")
        for (let i = 0; i < data.tags.length && i < 3; i++) {
            tags.innerHTML = `<li>${data.tags[i]}</li>`;
        }


        let imagen = document.querySelector(".imagen")
        imagen.src = data.thumbnail


        let reviews = document.querySelector(".comentario1")
        let reviews2 = document.querySelector(".comentario2")
        for (let i = 0; i < data.reviews.length && i < 2; i++) {


            reviews.innerHTML =
                `


            <article>
                <p>
                    nombre:${data.reviews[i].reviewerName}
                </p>


                <p>
                    fetcha:${data.reviews[i].date}
                </p>
                <p>
                    opinion:${data.reviews[i].comment}
                </p>
                <p>
                    rating:${data.reviews[i].rating}
                </p>


            </article>
            `;
        }












        for (let i = 1; i < data.reviews.length && i < 3; i++) {


            reviews2.innerHTML =
                `


            <article>
                <p>
                    nombre:${data.reviews[i].reviewerName}
                </p>


                <p>
                    fetcha:${data.reviews[i].date}
                </p>
                <p>
                    opinion:${data.reviews[i].comment}
                </p>
                <p>
                    rating:${data.reviews[i].rating}
                </p>


            </article>
            `;
        }


    })
    .catch(function (error) {
        console.log("Error: " + error);
    })







