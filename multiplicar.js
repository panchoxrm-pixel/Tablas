function generarTablas(){
    let idNumeroTabla = document.getElementById("idNoTabla");
    let numeroTablaEntero = parseInt(idNumeroTabla.value);
    let contenedor = document.getElementById("idContenedorTabla")
    let contenido = "<h2>Tabla del número " + numeroTablaEntero + "</h2>";
    for (let i = 1; i <= 10; i++){
        contenido = contenido + '<div class="fila">' + numeroTablaEntero + ' x ' + i + ' = ' + (numeroTablaEntero * i) + '</div>';        
    }
    contenedor.innerHTML = contenido;
}