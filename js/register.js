let password = document.querySelector(".password")
let repeat = document.querySelector(".repeatpassword")
let email = document.querySelector(".emailinput34")
let formulario = document.querySelector(".formthing2")


formulario.addEventListener("submit", function (event) {
    event.preventDefault();


    if (email.value == "") {
        alert("el campo Email es obligatorio ")
    } else if(password.value == ""){
        alert("el campo Contraseña es obligatorio ")
    } else if(password.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres")
    }else if(password.value != repeat.value) {
    alert("Las contraseñas deben coincidir")
    }else {
        this.submit()
    }
})

