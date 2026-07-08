function abrirHistoria(
    nombre,
    deporte,
    descripcion,
    video
){

    document.getElementById("nombreHistoria").innerHTML =
    nombre;

    document.getElementById("deporteHistoria").innerHTML =
    "🏅 " + deporte;

    document.getElementById("descripcionHistoria").innerHTML =
    descripcion;

    document.getElementById("videoHistoria").src =
    video;

    document.getElementById("modalHistoria").style.display =
    "block";
}


function cerrarHistoria(){

    document.getElementById("modalHistoria").style.display =
    "none";

    // Detiene el video al cerrar la ventana
    document.getElementById("videoHistoria").src = "";
}

