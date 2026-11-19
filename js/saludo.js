let emailGuardado = localStorage.getItem("userEmail")
let saludoTexto = document.querySelector(".header1")

saludoTexto.innerText = "Bienvenido:"+ emailGuardado; 