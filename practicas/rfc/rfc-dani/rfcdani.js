function generarRfc() {
    const nombre = document.getElementById('nombre').value.toUpperCase();
    const apellidoPaterno = document.getElementById('apellidoPaterno').value.toUpperCase();
    const apellidoMaterno = document.getElementById('apellidoMaterno').value.toUpperCase();
    let dia = document.getElementById('dia').value;
    let mes = document.getElementById('mes').value;
    let año = document.getElementById('año').value;

    // Validar que los campos no estén vacíos
    if (!nombre || !apellidoPaterno || !apellidoMaterno || !dia || !mes || !año) {
        alert("Por favor, completa todos los campos para generar el RFC.");
        return;
    }

    // Asegurar que el mes y el día sean de dos dígitos
    if (mes.length === 1) mes = '0' + mes;
    if (dia.length === 1) dia = '0' + dia;

    // Concatenar para formar el RFC
    const rfc = apellidoPaterno.slice(0, 2) +
                apellidoMaterno[0] +
                nombre[0] + 
                año + mes + dia + 'XXX';
                
    // Mostrar el RFC generado en el elemento de resultado y hacer visible el div
    const mostrarRfc = document.getElementById('resultado');
    mostrarRfc.innerHTML = 'Su RFC es: ' + rfc;
    mostrarRfc.style.display = 'block';
}
