const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cómo te llamas? ', (nombre) => {
    rl.question('¿En qué idioma quieres que te salude? (1: Español, 2: Inglés) ', (idiomaRespuesta) => {
        const saludos = {
            '1': `Hola, bienvenido al Curso de JavaScript, ${nombre}`,
            '2': `Hello, welcome to the JavaScript course, ${nombre}`
        };

        console.log(saludos[idiomaRespuesta] || `Idioma no reconocido, te saludo en español: Hola ${nombre}`);

        rl.close();
    });
});

//Opción 2 de codigo//

/* const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cómo te llamas? ', (nombre) => {
    rl.question('¿En qué idioma quieres que te salude? (1: Español, 2: Inglés) ', (respuestaIdioma) => {
        const saludo = respuestaIdioma === '2' 
            ? `Hello, welcome to the JavaScript course, ${nombre}` 
            : `Hola, bienvenido al Curso de JavaScript, ${nombre}`;

        console.log(saludo);
        rl.close();
    });
});
 */