let formulario = document.querySelector("form");
let campoEmail = document.querySelector(".email1");
let campoPassword = document.querySelector(".password1")


formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (campoEmail.value == "") {
        alert("el campo es obligatorio")
    } else if(campoPassword.value == ""){
        alert("el campo es obligatorio")
    } else if(campoPassword.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres")
    }else {
        localStorage.setItem("userEmail",campoEmail.value);
       
        this.submit()
    }


})

