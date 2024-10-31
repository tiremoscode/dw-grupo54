
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Aqui puse las variables que quiero
    const nombres = document.getElementById('nombres').value.trim();
    const apellidoPaterno = document.getElementById('apellidoPaterno').value.trim();
    const apellidoMaterno = document.getElementById('apellidoMaterno').value.trim();
    const diaNacimiento = parseInt(document.getElementById('diaNacimiento').value.trim(), 10);
    const mesNacimiento = parseInt(document.getElementById('mesNacimiento').value.trim(), 10);
    const anioNacimiento = parseInt(document.getElementById('anioNacimiento').value.trim(), 10);

    // Aqui es para validar que no haya campos vacios 
    if (!nombres || !apellidoPaterno || !apellidoMaterno || isNaN(diaNacimiento) || isNaN(mesNacimiento) || isNaN(anioNacimiento)) {
        document.getElementById('resultado').innerHTML = "<p style='color:red;'>Por favor, completa todos los campos correctamente.</p>";
        return;
    }

    // Aqui ver si la fecha que escriben esta bien, con un formato adecuado
    const fechaValida = new Date(2000 + anioNacimiento, mesNacimiento - 1, diaNacimiento);
    if (fechaValida.getFullYear() !== (2000 + anioNacimiento) || fechaValida.getMonth() !== (mesNacimiento - 1) || fechaValida.getDate() !== diaNacimiento) {
        document.getElementById('resultado').innerHTML = "<p style='color:red;'>La fecha de nacimiento es inválida.</p>";
        return;
    }

    // Aqui puse el numero fijo de tres digitos (se puede cambiar por el que sea, lo puse en numero para más facil)
    const numeroFijo = '123'; 

    // Aqui se "GENERA" mi RFC
    const rfc = generarRFC(apellidoPaterno, apellidoMaterno, nombres, diaNacimiento, mesNacimiento, anioNacimiento, numeroFijo);

    // Aqui es para mostrar el resultado final de todo lo que hice 
    document.getElementById('resultado').innerHTML = `<h2>RFC Generado:</h2><p>${rfc}</p>`;
});

function generarRFC(apellidoPaterno, apellidoMaterno, nombres, dia, mes, anio, numeroFijo) {
    // Aqui quiero las primeras letras
    const rfcApellidoPaterno = apellidoPaterno.charAt(0);
    const rfcApellidoMaterno = apellidoMaterno.charAt(0);
    const rfcNombre = nombres.split(" ")[0].charAt(0); // Primer nombre

    // Aqui puse esto para formatear la fecha si es que no se puso bien, ejem: 120701
    const rfcFecha = `${anio}${mes.toString().padStart(2, '0')}${dia.toString().padStart(2, '0')}`;

    // Concatene aqui para crear el rfc
    const rfc = `${rfcApellidoPaterno}${rfcApellidoMaterno}${rfcNombre}${rfcFecha}${numeroFijo}`;

    // Esta función es para poner en mayusculas lo que solicite, si quisiera la cadena (rfc) en minusculas pondria "toLowerCase"
    return rfc.toUpperCase();
}
