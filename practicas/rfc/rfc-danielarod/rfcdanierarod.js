function generarRFC(){
    const nombre = document.getElementById('nombre').value;
    const apellidoPaterno = document.getElementById('apellidoPaterno').value.trim();
    const apellidoMaterno = document.getElementById('apellidoMaterno').value.trim();
    const anio = document.getElementById('anio').value.trim();
    const mes = document.getElementById('mes').value.trim();
    const dia = document.getElementById('dia').value.trim();

    const numeroFijo = 'XXX';

    if (!nombre || !apellidoPaterno || !apellidoMaterno || !anio || !mes || !dia) {
        alert("ALERTA!!Todos los campos son obligatorios");
        return;
    }
    if (anio.length !== 4 || isNaN(anio)) {
        alert("ALERTA!!El año debe de 4 dígitos");
        return;
    }
    
        

    const rfcGenerado = apellidoPaterno.slice(0,2) +
                        apellidoMaterno.slice(0,1) + 
                        nombre.slice(0,1) + 
                        anio.slice(2,4) + 
                        mes.padStart(2,0) +
                        dia.padStart(2,0) +
                        numeroFijo;

    document.getElementById('rfc').textContent = 'El RFC Generado es: ' + rfcGenerado.toUpperCase();
    }