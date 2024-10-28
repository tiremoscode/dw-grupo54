// Ejercicio para pedir datos al usuario e imprimirlo en consola//

// Se utiliza una libreria llamada readline que esta dentro de node.js//

// 1. Se crea un objeto de la librería readline, 'se llama a la librería//
// readline - variable para obtener el objeto
const readline = require('readline');

//  Generar un objeto para poder manejar entradas y salidas
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});


rl.question('¿Cómo te llamas? ', (name) => {
    console.log('Hola, bienvenido al curso de JS, ' + name);

    // es importante, cada que abrimos un input, debemos cerrarlo
    rl.close();
});