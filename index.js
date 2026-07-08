//=====================================
// SLIDER
//=====================================

const slider = document.querySelector(".slider");
const btnDerecha = document.querySelector(".derecha");
const btnIzquierda = document.querySelector(".izquierda");

if(slider && btnDerecha && btnIzquierda){

    let posicion = 0;

    btnDerecha.addEventListener("click", ()=>{

        posicion++;

        if(posicion > 3){
            posicion = 0;
        }

        slider.style.transform =
        `translateX(-${posicion*25}%)`;

    });

    btnIzquierda.addEventListener("click", ()=>{

        posicion--;

        if(posicion < 0){
            posicion = 3;
        }

        slider.style.transform =
        `translateX(-${posicion*25}%)`;

    });

}



//=====================================
// BOTONES DEL INICIO
//=====================================

function verDeportes(){

    window.location.href="deportes.html";

}

function verEventos(){

    window.location.href="eventos.html";

}

function verHistorias(){

    window.location.href="historias.html";

}