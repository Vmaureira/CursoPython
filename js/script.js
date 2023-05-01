

function imagenCentrada(datos){
    $("#tituloModal").text(datos[0]);
    $("#descripcionModal").text(datos[1]);
    $("#imagenModal").attr('src',datos[2]);
    $("#miModal").modal('show');
}


$("#EnviarFomR").click(function () {
    //Campos Formulario Reserva
    var Rnombre = $("#Rnombre").val();
    var Rcorreo = $("#Rcorreo").val();
    var Rtelefono = $("#Rtelefono").val();
    var Rfecha = $("#Rfecha").val();
    var Rhora = $("#Rhora").val();
    var Rcantasistenes = $("#Rcantasistenes").val();

    if (!Rnombre || Rnombre === "") {
        alert("El campo 'Nombre' es obligatorio");
    } else if (!Rcorreo || Rcorreo === "") {
        alert("El campo 'Correo' es obligatorio");
    } else if (!Rtelefono || Rtelefono === "") {
        alert("El campo 'Teléfono' es obligatorio");
    } else if (!Rfecha || Rfecha === "") {
        alert("El campo 'Fecha' es obligatorio");
    } else if (!Rhora || Rhora === "") {
        alert("El campo 'Hora' es obligatorio");
    } else if (!Rcantasistenes || Rcantasistenes === "") {
        alert("El campo 'Cantidad de Asistentes' es obligatorio");
    } else {
        alert("Estimado(a): " + Rnombre + " agradecemos por reservar con nosotros. Hemos registrado " + Rcantasistenes + " asistentes. Se ha enviado el código de confirmación al correo " + Rcorreo + "\nGracias por preferirnos.");
    }
});