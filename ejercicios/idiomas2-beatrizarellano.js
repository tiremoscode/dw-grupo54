// *** Opción 1 de codigo ***

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('¿Cómo te llamas? ', nombre => {
    readline.question('¿En qué idioma quieres que te salude? (1: Español, 2: Inglés) ', idioma => {
        console.log(
            (idioma === '2' ? `Hello, welcome, ${nombre}` : `Hola, bienvenido, ${nombre}`)
        );
        readline.close();
    });
});


// *** Opción 2 de codigo ***


/*     const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const pregunta = (texto) => new Promise(resuelve => rl.question(texto, resuelve));

    (async () => {
        const nombre = await pregunta('¿Cómo te llamas? ');
        const idioma = await pregunta('¿En qué idioma quieres que te salude? (1: Español, 2: Inglés) ');
        console.log(
            (idioma === '2' ? `Hello, welcome, ${nombre}` : `Hola, bienvenido, ${nombre}`)
        );
        rl.close();
    })(); */


// *** Opción 3 de codigo ***

// Código eliminando la anidación y sin necesidad de usar módulos externos



/* const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pregunta = (texto) => new Promise(resolve => rl.question(texto, resolve));

(async () => {
    const nombre = await pregunta('¿Cómo te llamas? ');
    const idioma = await pregunta('¿En qué idioma quieres que te salude? (1: Español, 2: Inglés) ');

    const saludo = idioma === '2'
        ? `Hello, welcome, ${nombre}`
        : `Hola, bienvenido, ${nombre}`;

    console.log(saludo);
    rl.close();
})(); */



// *** Opción 4 de codigo ***

// Utilizando promesas


/*     const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function pregunta(texto) {
        return new Promise(resolve => rl.question(texto, resolve));
    }

    let nombre;

    pregunta('¿Cómo te llamas? ')
        .then(respuestaNombre => {
            nombre = respuestaNombre;
            return pregunta('¿En qué idioma quieres que te salude? (1: Español, 2: Inglés) ');
        })
        .then(idioma => {
            const saludo = idioma === '2'
                ? `Hello, welcome to the JavaScript course, ${nombre}`
                : `Hola, bienvenido al Curso de JavaScript, ${nombre}`;
            console.log(saludo);
        })
        .catch(error => {
            console.error('Ocurrió un error:', error);
        })
        .finally(() => {
            rl.close();
        }); */





