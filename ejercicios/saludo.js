function saludaUsuario() {
    // Obtener el valor del nombre del usuario de la cajita de texto
    const usuario = document.getElementById('nombreUsuario').value;
    console.log(usuario);

    // Mostrar el saludo en la página de internet.
    const generarSaludo = document.getElementById('mostrarSaludo');
    // generarSaludo.innerHTML = `Hola ${usuario} desde JavaScript hacía HTML.`;
    generarSaludo.innerHTML = "Hola " + usuario + " desde JS con comillas dobles";
}