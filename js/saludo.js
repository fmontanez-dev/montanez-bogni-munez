let emailGuardado = localStorage.getItem("userEmail")
let saludoTexto = document.querySelector(".header1")
let linkLogOut = document.querySelector(".logout")
let linkLogin =document.querySelector(".marg1")
let linkRegister =document.querySelector(".marg2")


if (emailGuardado != ""){
        linkLogin.innerHTML= ""
        linkRegister.innerHTML = ""
        saludoTexto.innerText = "bienvenido usuario:" + emailGuardado;
}









