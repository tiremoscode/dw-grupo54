function generarRFC() {
    const nombre = document.getElementById('nombre').value.toUpperCase();
    const apellidoPaterno = document.getElementById('apellidop').value.toUpperCase();
    const apellidoMaterno = document.getElementById('apellidom').value.toUpperCase();
    const dia = document.getElementById('dia').value;
    const mes = document.getElementById('mes').value;
    const año = document.getElementById('año').value.slice(-2);

    const seccionApePat = apellidoPaterno[0] + apellidoPaterno[1]; 
    const seccionApeMat = apellidoMaterno[0]; 
    const seccionNom = nombre[0]; 

    const rfc = `${seccionApePat}${seccionApeMat}${seccionNom}${año}${mes}${dia}XXX`;

    document.getElementById('tuRFC').innerText = 'Tu RFC es: ' + rfc;

}
