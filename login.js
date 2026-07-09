//========================================
// LOGIN EVOCASPORT
//========================================

const formulario = document.getElementById("formLogin");

const correo = document.getElementById("correo");

const password = document.getElementById("password");

const ojo = document.getElementById("mostrarPassword");


//========================================
// MOSTRAR / OCULTAR CONTRASEÑA
//========================================

ojo.addEventListener("click", () => {

    if(password.type === "password"){

        password.type = "text";

        ojo.classList.remove("fa-eye");
        ojo.classList.add("fa-eye-slash");

    }else{

        password.type = "password";

        ojo.classList.remove("fa-eye-slash");
        ojo.classList.add("fa-eye");

    }

});


//========================================
// VALIDAR CORREO
//========================================

function correoValido(email){

    const expresion =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return expresion.test(email);

}


//========================================
// LOGIN
//========================================

formulario.addEventListener("submit",(e)=>{

    e.preventDefault();

    if(correo.value.trim()===""){

        alert("Ingrese su correo electrónico.");

        correo.focus();

        return;

    }

    if(!correoValido(correo.value)){

        alert("Ingrese un correo válido.");

        correo.focus();

        return;

    }

    if(password.value.trim()===""){

        alert("Ingrese la contraseña.");

        password.focus();

        return;

    }

    if(password.value.length<6){

        alert("La contraseña debe tener mínimo 6 caracteres.");

        password.focus();

        return;

    }

    //==================================================
    // AQUÍ MÁS ADELANTE CONECTAREMOS CON PHP Y MYSQL
    //==================================================

    alert("Inicio de sesión correcto (modo demostración).");

    window.location.href="index.html";

});