function generarRFC() {
    const nombre = document.getElementById('nombre').value.toUpperCase();
    const apellidoPaterno = document.getElementById('apellidop').value.toUpperCase();
    const apellidoMaterno = document.getElementById('apellidom').value.toUpperCase();
    const dia = document.getElementById('dia').value;
    const mes = document.getElementById('mes').value;
    const año = document.getElementById('año').value.slice(-2);

    const partePat = apellidoPaterno[0] + apellidoPaterno[1]; 
    const parteMat = apellidoMaterno[0]; 
    const parteNom = nombre[0]; 

    const rfc = `${partePat}${parteMat}${parteNom}${año}${mes}${dia}XXX`;

    document.getElementById('resultado').innerText = 'Tu RFC es: ' + rfc;

}
