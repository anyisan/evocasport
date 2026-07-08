function abrirEvento(
    titulo,
    imagen,
    ciudad,
    fecha,
    descripcion
){

    document.getElementById("tituloEvento").innerHTML = titulo;

    document.getElementById("imagenEvento").src = imagen;

    document.getElementById("ciudadEvento").innerHTML =
    "📍 " + ciudad;

    document.getElementById("fechaEvento").innerHTML =
    "📅 " + fecha;

    document.getElementById("descripcionEvento").innerHTML =
    descripcion;

    document.getElementById("modalEvento").style.display =
    "block";

    // EVENTO ROLLER DERBY
    if(titulo === "Torneo Tropical Altitude"){

        
    document.getElementById("linkMapa").href =
    "https://maps.app.goo.gl/evHsrL8cGsYKj36P7";


        document.getElementById("cronogramaEvento").innerHTML = `

        <div class="cronograma-grid">

            <div class="item-cronograma">
                <h4>🕚 11:00</h4>
                <p><strong>Actividad:</strong> Apertura y bienvenida</p>
                <p><strong>Participantes:</strong> Bogotá Bone Breakers</p>
                <p><strong>Detalles:</strong> Presentación del evento y equipos.</p>
            </div>

            <div class="item-cronograma">
                <h4>🕛 12:00</h4>
                <p><strong>Actividad:</strong> Primer partido</p>
                <p><strong>Participantes:</strong> Rock and Roller Queens vs Capital Rats</p>
                <p><strong>Detalles:</strong> Competencia nacional.</p>
            </div>

            <div class="item-cronograma">
                <h4>🕑 14:00</h4>
                <p><strong>Actividad:</strong> Segundo partido</p>
                <p><strong>Participantes:</strong> Bogotá Bone Breakers vs Atlantic Roller Derby (Canadá)</p>
                <p><strong>Detalles:</strong> Competencia internacional.</p>
            </div>

            <div class="item-cronograma">
                <h4>🕓 16:00</h4>
                <p><strong>Actividad:</strong> Exhibición cultural</p>
                <p><strong>Participantes:</strong> Artistas invitados</p>
                <p><strong>Detalles:</strong> Música, danza y stands.</p>
            </div>

            <div class="item-cronograma">
                <h4>🕔 17:00</h4>
                <p><strong>Actividad:</strong> Semifinales / Partidos destacados</p>
                <p><strong>Participantes:</strong> Equipos clasificados</p>
                <p><strong>Detalles:</strong> Intensidad máxima en pista.</p>
            </div>

            <div class="item-cronograma">
                <h4>🕖 19:00</h4>
                <p><strong>Actividad:</strong> Cierre de jornada</p>
                <p><strong>Participantes:</strong> Todos los equipos</p>
                <p><strong>Detalles:</strong> Actividades sociales y networking.</p>
            </div>
            
        </div>

        `;
    }

    // EVENTO ULTIMATE
    else if(titulo === "Campeonato Mundial Masters de Clubes de Ultimate"){

        document.getElementById("linkMapa").href =
    "https://maps.app.goo.gl/rPNKLDeH4cSGTebW9";

        document.getElementById("cronogramaEvento").innerHTML = `

        <div class="cronograma-grid">

            <div class="item-cronograma">
                <h4>📢 Octubre 2026</h4>
                <p><strong>Actividad:</strong> Publicación del fixture</p>
                <p><strong>Detalles:</strong> Se anunciarán grupos, horarios y programación oficial una vez finalicen las inscripciones.</p>
            </div>

            <div class="item-cronograma">
                <h4>🥏 Viernes 13 de noviembre</h4>
                <p><strong>Actividad:</strong> Fase de grupos</p>
                <p><strong>Detalles:</strong> Inicio oficial del campeonato y primeros encuentros.</p>
            </div>

            <div class="item-cronograma">
                <h4>🥏 14 y 15 de noviembre</h4>
                <p><strong>Actividad:</strong> Clasificatorias y semifinales</p>
                <p><strong>Detalles:</strong> Desarrollo de las rondas eliminatorias.</p>
            </div>

            <div class="item-cronograma">
                <h4>🏆 16 de noviembre</h4>
                <p><strong>Actividad:</strong> Finales y premiación</p>
                <p><strong>Detalles:</strong> Definición de campeones y ceremonia de clausura.</p>
            </div>

        </div>

        `;
    }

    else if(titulo === "Torneo nacional Roundnet Colombia 2026"){


        document.getElementById("linkMapa").href =
    "https://maps.app.goo.gl/umvotHBETvNrYZwv5";

        document.getElementById("cronogramaEvento").innerHTML = `

        <div class="cronograma-grid">

            <div class="item-cronograma">
                <h4>📢 Octubre 2026</h4>
                <p><strong>Actividad:</strong> Publicación del fixture</p>
                <p><strong>Detalles:</strong> Se anunciarán grupos, horarios y programación oficial una vez finalicen las inscripciones.</p>
            </div>

            <div class="item-cronograma">
                <h4>🥏 Viernes 13 de noviembre</h4>
                <p><strong>Actividad:</strong> Fase de grupos</p>
                <p><strong>Detalles:</strong> Inicio oficial del campeonato y primeros encuentros.</p>
            </div>

            <div class="item-cronograma">
                <h4>🥏 16 y 17 de noviembre</h4>
                <p><strong>Actividad:</strong> Clasificatorias y semifinales</p>
                <p><strong>Detalles:</strong> Desarrollo de las rondas eliminatorias.</p>
            </div>

            <div class="item-cronograma">
                <h4>🏆 17 de noviembre</h4>
                <p><strong>Actividad:</strong> Finales y premiación</p>
                <p><strong>Detalles:</strong> Definición de campeones y ceremonia de clausura.</p>
            </div>

        </div>

        `;
    }
        


    else if(titulo === "Torneo Latinoamericano de Bicipolo 2026"){

        document.getElementById("linkMapa").href =
    "https://maps.app.goo.gl/G7CLTD1RKvftufSeA";


    document.getElementById("cronogramaEvento").innerHTML = `

    <div class="cronograma-grid">

        <div class="item-cronograma">

            <h4>🟦 Estado del evento</h4>

            <p><strong>Programación:</strong> En construcción</p>

            <p><strong>Detalles:</strong> El comité organizador se encuentra definiendo el cronograma oficial de competencias y actividades.</p>

        </div>

        <div class="item-cronograma">

            <h4>📅 Fecha confirmada</h4>

            <p><strong>Evento:</strong> 10 al 16 de noviembre de 2026</p>

            <p><strong>Estado:</strong> Fecha aprobada por la organización.</p>

        </div>

        <div class="item-cronograma">

            <h4>📍 Lugar confirmado</h4>

            <p><strong>Ciudad:</strong> Lima, Perú</p>

            <p><strong>Detalles:</strong> El escenario oficial será anunciado próximamente por los organizadores.</p>

        </div>

        <div class="item-cronograma">

            <h4>⚠️ Información importante</h4>

            <p><strong>Cronograma:</strong> Pendiente de publicación.</p>

            <p><strong>Detalles:</strong> Los horarios de partidos, entrenamientos y actividades complementarias serán publicados próximamente.</p>

        </div>

    </div>

    `;
}


else if(titulo === "Festival Distrito 2026"){

    document.getElementById("linkMapa").href =
    "https://maps.app.goo.gl/umvotHBETvNrYZwv5";

    document.getElementById("cronogramaEvento").innerHTML = `

    <div class="cronograma-grid">

        <div class="item-cronograma">

            <h4>🕹️ Zona 1: Arena eSports y Cultura Urbana</h4>

            <p><strong>Actividades:</strong> eSports, SimRacing, K-Pop, Cosplay y Rap Freestyle.</p>

            <p><strong>Exhibiciones:</strong> Fútbol Freestyle y BMX Flatland.</p>

            <p><strong>Detalles:</strong> Espacio tecnológico que integra competencias digitales y expresiones urbanas.</p>

        </div>

        <div class="item-cronograma">

            <h4>🛹 Zona 2: Área Extrema y de Raqueta</h4>

            <p><strong>Actividades:</strong> Roller Skate, Scooter Freestyle, BMX Street y Roller Derby.</p>

            <p><strong>Torneos:</strong> Pickleball, Pádel y Beach Tennis.</p>

            <p><strong>Detalles:</strong> Competencias y exhibiciones al aire libre para deportes emergentes.</p>

        </div>

        <div class="item-cronograma">

            <h4>🏈 Zona 3: Deportes de Balón y Estrategia</h4>

            <p><strong>Disciplinas:</strong> Flag Football, Tchoukball, Dodgeball y Fútbol Australiano.</p>

            <p><strong>Objetivo:</strong> Promover deportes colectivos alternativos.</p>

            <p><strong>Detalles:</strong> Actividades enfocadas en estrategia, velocidad y trabajo en equipo.</p>

        </div>

        <div class="item-cronograma">

            <h4>🛡️ Zona 4: Juegos de Rol y Combate Épico</h4>

            <p><strong>Actividades:</strong> Soft Combat y Jugger.</p>

            <p><strong>Participantes:</strong> Equipos y comunidades especializadas.</p>

            <p><strong>Detalles:</strong> Espacio dedicado al combate estratégico y la recreación deportiva.</p>

        </div>

        <div class="item-cronograma">

            <h4>🏎️ Grandes Finales</h4>

            <p><strong>Evento principal:</strong> Gran Final de Drone Racing.</p>

            <p><strong>Competencia:</strong> Carreras de drones en circuitos de obstáculos.</p>

            <p><strong>Detalles:</strong> Los pilotos competirán utilizando gafas de realidad virtual para una experiencia inmersiva.</p>

        </div>

    </div>

    `;
}
    // EVENTOS FUTUROS
    else{

        document.getElementById("linkMapa").href =
    "https://maps.app.goo.gl/umvotHBETvNrYZwv5";


    document.getElementById("cronogramaEvento").innerHTML = `

    
    <div class="cronograma-grid">

        <div class="item-cronograma">

            <h4>🚴 Viernes 28 de agosto</h4>

            <p><strong>Actividad:</strong> Reconocimiento de pista</p>

            <p><strong>Participantes:</strong> Riders inscritos y delegados</p>

            <p><strong>Detalles:</strong> Entrenamientos oficiales controlados y congreso técnico para la organización del campeonato.</p>

        </div>

        <div class="item-cronograma">

            <h4>🚴 Sábado 29 de agosto</h4>

            <p><strong>Actividad:</strong> Rondas clasificatorias</p>

            <p><strong>Participantes:</strong> Categorías Expertos y Élite</p>

            <p><strong>Detalles:</strong> Desarrollo de las pruebas clasificatorias que definirán los finalistas del evento.</p>

        </div>

        <div class="item-cronograma">

            <h4>🏆 Domingo 30 de agosto</h4>

            <p><strong>Actividad:</strong> Grandes finales y premiación</p>

            <p><strong>Participantes:</strong> Finalistas de todas las categorías</p>

            <p><strong>Detalles:</strong> Entrega de medallas, reconocimientos y asignación de puntos para el ranking oficial.</p>

        </div>

    </div>

    `;
}

document.getElementById("mapaEvento").src =
    "https://maps.google.com/maps?q=Parque%20Simón%20Bolívar%20Bogotá&t=&z=15&ie=UTF8&iwloc=&output=embed";
}

function cerrarEvento(){

    document.getElementById("modalEvento").style.display =
    "none";
}