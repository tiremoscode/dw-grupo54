function generarRfc() {
    const nombre = document.getElementById('nombre').value.toUpperCase();
    const apellidoPaterno = document.getElementById('apellidoPaterno').value.toUpperCase();
    const apellidoMaterno = document.getElementById('apellidoMaterno').value.toUpperCase();
    const dia= document.getElementById('dia').value;
    const mes = document.getElementById('mes').value;
    const año = document.getElementById('año').value;

    const rfc = apellidoPaterno.slice(0,2) +
                apellidoMaterno[0] +
                nombre[0] + 
                año + mes + dia + 'XXX';
    const mostrarRfc = document.getElementById('resultado');
    mostrarRfc.innerHTML = 'Su RFC es:  ' + rfc;

}