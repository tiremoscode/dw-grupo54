const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cómo te llamas?\n', (name) => {
    rl.question('¿En qué idioma deseas que te salude? (Sólo ingrese el número) \n 1.-Español \n 2.-Inglés \n 3.-Francés \n', (idioma) => {

        if (idioma === '1') {
            console.log('Hola, bienvenido al Curso de JavaScript ' + name + ' :)');
        } else if (idioma === '2') {
            console.log('Hello, welcome to the JavaScript Course ' + name + ' :)');
        } else if (idioma === '3') {
            console.log('Bonjour, bienvenue dans le cours JavaScript ' + name + ' :)');
        } else {
            console.log('Idioma no reconocido :(');
        }

        rl.close();

    });

});