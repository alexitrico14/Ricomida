$(document).ready(function () {

    // Activar tooltips
    $(function () {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach(function (tooltipTriggerEl) {
            new bootstrap.Tooltip(tooltipTriggerEl);
        });
    });

    // Alerta Correo
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });

    // Cambiar color del texto dblclick
    $("#ingredientes, #preparacion").on("dblclick", function () {
        $(this).css("color", "red");
    });

    // Mostrar/ocultar contenido
    $(".toggle-content").click(function () {
        $(this).next().toggle();
    });

});
