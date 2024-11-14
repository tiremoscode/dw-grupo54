
function generarRFC() {
    // Primero obtenemos los datos del usuario
    let nombre = document.getElementById('nombre').value.toUpperCase(); //Usamos la función toUpperCase() este convierte las letras a mayúsculas en caso de que el usuario no ingrese sus datos como en el ejemplo.
    let apellidoPaterno = document.getElementById('apellidoPaterno').value.toUpperCase();
    let apellidoMaterno = document.getElementById('apellidoMaterno').value.toUpperCase();
    let dia = document.getElementById('dia').value;
    let mes = document.getElementById('mes').value;
    let anio = document.getElementById('anio').value;

    // Agrego una validación por si el usuario no anotó los  2 caracteres de dia o del mes y 
    // también si no ingresó los 4 caracteres (2001) del año. y si no se cumple le manda un mensaje.
    if (dia.length !== 2 || mes.length !== 2 || anio.length !== 4) {
        document.getElementById('resultado').innerHTML = 'Por favor, ingresa los datos correctamente.';
        return;
    }

    // Generar el RFC siguiendo las reglas básicas
    let rfc = ''; //se declara una variable let ya que en el curso decía que este se usa cuando el valor puede cambiar y lo inicializamos como una cadena vacía
    rfc += apellidoPaterno.substring(0, 2); // Primeras dos letras del apellido paterno. Se usa el operador de asignación
    rfc += apellidoMaterno.substring(0, 1); // Primera letra del apellido materno. Se implementa el método substring(inicio, fin)
    rfc += nombre.substring(0, 1);          // Primera letra del nombre
    rfc += anio.slice(-2);                  // Últimos dos dígitos del año. Se usa el método slice() ya que acepta índices negativos, lo que permite contar desde el final de la cadena.
    rfc += mes;                             // Mes de nacimiento
    rfc += dia;                             // Día de nacimiento
    rfc += 'XXX';                           // Por último, añadimos la homoclave con un valor fijo XXX.

    // Mostrar el resultado
    const resultadoRFC = document.getElementById('resultado');
    resultadoRFC.innerHTML = 'RFC generado: ' + rfc;
}

//Miriam Andrew Quintana