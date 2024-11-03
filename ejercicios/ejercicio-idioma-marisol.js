const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question('¿Cuál es tu nombre? ', (nombre) => {
    rl.question('Selecciona 1 para inglés o 2 para español: ', (respuesta) =>{
        if (respuesta == '1') {
            console.log('Hi, I hope you are doing great, ' + nombre)
        } else {
            console.log('Hola, espero estés bien, ' + nombre)
        };
        rl.close();
    });

});