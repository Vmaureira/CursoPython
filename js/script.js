function imagenCentrada(datos) {
  $("#tituloModal").text(datos[0]);
  $("#descripcionModal").text(datos[1]);
  $("#imagenModal").attr("src", datos[2]);
  $("#miModal").modal("show");
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
    alert(
      "Estimado(a): " +
        Rnombre +
        " agradecemos por reservar con nosotros. Hemos registrado " +
        Rcantasistenes +
        " asistentes. Se ha enviado el código de confirmación al correo " +
        Rcorreo +
        "\nGracias por preferirnos."
    );
  }
});

$("#carouselSN").on("slid.bs.carousel", function () {
  var indiceactivado = $(this).find(".carousel-item.active").index();

  switch (parseInt(indiceactivado)) {
    case 0:
      $("#descSn").text(`
        Nimrodel Significa “dama de la cueva blanca”. Fue una elfa silvana que vivió
        durante la Tercera Edad del Sol en el bosque de Lothlórien. En honor a su nombre, se acuña
        Nimrodel al río que nace en las Montañas Nubladas
        `);
      break;

    case 1:
      $("#descSn").text(`
        Nimrodel Pub Restaurant es un oasis de calma y diversión, lleno de rincones acogedores
        en donde se resalta la belleza de su decoración élfica.
        Es un lugar ideal para visitar solo o acompañado, disfrutar una tarde con amigos, terminar
        el día después del trabajo o almorzar con tu familia.
        Puedes probar nuestras tradicionales tablas, en todas sus variedades y que nos han
        otorgado reconocimiento dentro de la cultura gastronómica.
        También puedes disfrutar nuestras cervezas de fabricación propia, con sabores que te
        llevarán a un mágico mundo.
        `);
      break;

    default:
      break;
  }

  //   console.log('The active slide index is ' + indiceactivado);
});
