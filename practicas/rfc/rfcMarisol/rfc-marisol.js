function generarRfc(nombre1, apellido1, apellido2, dia1, mes1, anio1) {
    
    // Obtener valores registrados
    const nombre = document.getElementById('nombre1').value;    
    const apellidoP = document.getElementById('apellido1').value;    
    const apellidoM = document.getElementById('apellido2').value;    
    const dia = document.getElementById('dia1').value;    
    const mes = document.getElementById('mes1').value;
    const anio = document.getElementById('anio1').value;
 
    // transformar valores

    const iniNombre = nombre[0].toUpperCase(nombre);    
    const iniApellidoP = apellidoP.substr(0, 2).toUpperCase(apellidoP);    
    const iniApellidoM = apellidoM[0].toUpperCase(apellidoM);   
    const vAnio = anio.substr(2, 2);
    

    // Modificar vDia y vMes si es necesario
    const vDia = dia;
    const vDiaModificado = (parseInt(vDia) < 10 ? "0" : "") + vDia;
    const vMes = mes;
    const vMesModificado = (parseInt(vMes) < 10 ? "0" : "") + vMes;

    // generar RFC

    const valorRfc = iniApellidoP + iniApellidoM + iniNombre + vAnio + vMesModificado + vDiaModificado + 'XXX';

    // mostrar resultado
    const mostrarResultado = document.getElementById('rfc');
    mostrarResultado.innerHTML = 'Tu RFC es el siguiente: ' + valorRfc;

}