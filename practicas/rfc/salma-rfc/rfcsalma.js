function obtenerRfc() {
    const valor1 = document.getElementById('apellidoPaterno').value.toUpperCase().substr(0,2);
    const valor2 = document.getElementById('apellidoMaterno').value.toUpperCase().substr(0,1);
    const valor3 = document.getElementById('nombre').value.toUpperCase().substr(0,1);
    const valor4 = document.getElementById('anio').value.substr(2,2);
    const valor5 = document.getElementById('mes').value;
    const valor6 = document.getElementById('dia').value;

    const rfc = valor1 + valor2 + valor3 + valor4 + valor5 + valor6 + "XXX";
    const mostrarRfc = document.getElementById('resultado');
    mostrarRfc.innerText = rfc;
}