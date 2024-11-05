function calcularDescuento(porcentaje) {
    const obtenerPrecio = parseInt(document.getElementById('precio').value);
    console.log('precio ', obtenerPrecio);

    // Calcular el Descuento
    const descuento = (obtenerPrecio * porcentaje) / 100;
    console.log(descuento);

    // mostrar el calculo
    const precioFinal = obtenerPrecio - descuento;

    const mostrarResultado = document.getElementById('resultado');
    mostrarResultado.innerHTML = 'Tu producto ahora costará: $ ' + precioFinal;
}