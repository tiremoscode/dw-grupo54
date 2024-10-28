// Ejercicio para saludar en el idioma que elijas

const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const opciones = {
    es: 'Hola',
    en: 'Hello',
};


rl.question('¿Cómo te llamas? ', (name) => {
    rl.question('Elige el idioma es/en ',(idioma) => {
        if (idioma === 'es'){
            console.log(opciones[idioma] + '! bienvenid@ al curso de JS, ' + name);
        }
        else if (idioma === 'en'){
            console.log(opciones[idioma] + '! welcome to the course of JS, ' + name);
        } else {
            console.log('Error: Idioma inválido');
        }
        rl.close();
    });
});