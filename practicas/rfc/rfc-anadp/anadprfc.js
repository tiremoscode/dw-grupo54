function eliminarAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function calcularRFC() {
    const nombre = eliminarAcentos(document.getElementById('nombre').value);
    const apellidoPaterno = eliminarAcentos(document.getElementById('apellidoPaterno').value);
    const apellidoMaterno = eliminarAcentos(document.getElementById('apellidoMaterno').value);
    const dia = document.getElementById('diaNacimiento').value.padStart(2, '0');
    const mes = document.getElementById('mesNacimiento').value.padStart(2, '0');
    const anio = document.getElementById('anioNacimiento').value.padStart(2, '0');

    const rfcP = apellidoPaterno.substring(0, 2);
    const rfcM = apellidoMaterno.charAt(0);
    const rfcN = nombre.charAt(0);

    const rfc = `${rfcP}${rfcM}${rfcN}${anio}${mes}${dia}XXX`;

    document.getElementById('resultado').innerText = `Tu RFC es: ${rfc}`;
}
