
let url = "https://dummyjson.com/products/category/smartphones";

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idProduct = queryStringObj.get("id")

fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data)

  let nombre = document.querySelector(".nombre")
  nombre.innertext = data.title
  let marca = document.querySelector(".marca")
  let precio = document.querySelector(".precio")
  let stock = document.querySelector(".stock")
  let desc = document.querySelector(".descripcion")
  let tags = document.querySelector(".tags")

})
.catch(function(error) {
  console.log("Error: " + error);
})


