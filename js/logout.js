let linkLogout = document.querySelector(".logout")


linkLogout.addEventListener("click", function(event){
    event.preventDefault()
    localStorage.clear()
    let saludoTexto = document.querySelector(".header1")
    let linkLogin = document.querySelector(".marg1")
    let linkRegister = document.querySelector(".marg2")
    saludoTexto.innerHTML =""
    linkLogout.innerHTML = ""
    linkLogin.innerHTML = `<li class="marg1"> <a href="./login.html">Login</a> </li>`
    linkRegister.innerHTML = ` <li class="marg2"> <a href="./register.html"> Registrarse</a></li>`
})
