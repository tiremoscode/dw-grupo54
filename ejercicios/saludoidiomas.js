const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuál es tu nombre? ', (name) => {
   
    rl.question('Elige el número del idioma de tu preferencia: ', (opcion) => {
        if (opcion === '1') {
            console.log('Hola, bienvenid@ al curso de JavaScript, ' + name);
        } else {
            console.log('Hello, welcome to JavaScript course, ' + name);
        }
        rl.close();
    });
    console.log('\n1. Español');
    console.log('2. English');
});

// Ana Laura Domínguez