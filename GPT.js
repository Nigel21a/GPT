// Agrega este código a un archivo llamado "script.js"

document.addEventListener("DOMContentLoaded", function () {
    // Función para mostrar un mensaje de bienvenida
    function mostrarMensajeBienvenida() {
        alert("¡Bienvenido a AjedrezMáster! Esperamos que disfrutes de tu experiencia en nuestro sitio.");
    }

    // Agregar un evento de clic al encabezado
    var header = document.querySelector("header h1");
    header.addEventListener("click", mostrarMensajeBienvenida);
});