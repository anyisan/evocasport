//=====================================
// MODAL DEPORTES
//=====================================

function abrirModal(titulo,imagen,texto){

    document.getElementById("tituloModal").innerText =
    titulo;

    const imgModal =
    document.getElementById("imagenModal");

    imgModal.src = imagen;

    if(titulo==="Bossaball"){

        imgModal.style.width="65%";
        imgModal.style.height="200px";

    }

    else{

        imgModal.style.width="75%";
        imgModal.style.height="220px";

    }

    document.getElementById("textoModal").innerText =
    texto;

    document.getElementById("modalDeporte").style.display =
    "block";

}



function cerrarModal(){

    document.getElementById("modalDeporte").style.display =
    "none";

}



//=====================================
// FORMULARIO
//=====================================

const formulario =
document.querySelector(".formulario-deporte");

if(formulario){

formulario.addEventListener("submit",function(e){

    e.preventDefault();

    alert(
        "¡Gracias por tu sugerencia! La revisaremos pronto."
    );

    this.reset();

});

}