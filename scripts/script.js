document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("equipoForm");
    const textoEquipo = document.getElementById("textoEquipo");
    const imagenEquipo = document.getElementById("imagenEquipo");
    const resultado = document.getElementById("resultado");
    const pregunta = document.querySelector("#contenedor h2"); // Seleccionamos el <h2>

    // Mapeo de equipos con sus imágenes
    const imagenes = {
        atletico: "../images/atleticomadrid.png",
        madrid: "../images/madrid.png",
        barsa: "../images/barsa.png",
        betis: "../images/betis.png",
        sevilla: "../images/sevilla.png"
    };

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const equipoSeleccionado = document.getElementById("equipo").value;

        // Ocultar el formulario y la pregunta
        form.style.display = "none";
        pregunta.style.display = "none";
        resultado.style.display = "block";

        if (equipoSeleccionado === "ninguno") {
            textoEquipo.textContent = "A mí tampoco me gusta el fútbol.";
            imagenEquipo.style.display = "none";
        } else {
            textoEquipo.textContent = `Mi equipo favorito también es el ${form.equipo.options[form.equipo.selectedIndex].text}!`;
            imagenEquipo.src = imagenes[equipoSeleccionado];
            imagenEquipo.style.display = "block";
        }
    });
});

