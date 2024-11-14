const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cómo te llamas? ', (name) => {
    rl.question('¿En qué idioma te gustaría que te saludara? Escribe E para español o I para inglés. ', (idioma) => {
        if(idioma==='E'){
            console.log('Hola ' + name);
        } else if(idioma==='I'){
            console.log('Hello ' + name);
        } else {
            console.log('Opción no disponible');
        }
        rl.close();
    });
});
