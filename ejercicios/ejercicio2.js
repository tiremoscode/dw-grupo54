const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cómo te llamas?', (name) => {
    console.log('Hola, bienvenido al Curso de JavaScript ' + name);

    rl.close();
});