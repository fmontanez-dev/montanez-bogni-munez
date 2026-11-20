let emailGuardado = localStorage.getItem("userEmail")
let saludoTexto = document.querySelector(".header1")


if (emailGuardado ==""){
    document.querySelector(".marg1")
    }else{
        let linkLogin = document.querySelector(".marg1")
        let linkRegister = document.querySelector(".marg2")
        linkLogin.innerHTML= ""
        linkRegister.innerHTML = `<li><a href="./index.html" class="logout">Log out</a></li>`
        saludoTexto.innerText = "Bienvenido:"+ emailGuardado;
    }










