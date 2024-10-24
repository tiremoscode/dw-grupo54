const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('¿Cómo te llamas?', (name) => {
    rl.question('¿En que idioma quieres que te salude?, para español: 1 English: 2', (idiomaRespuesta) => {
        switch (idiomaRespuesta){
            case '1':
                console.log('Hola, bienvenido al Curso de JavaScript ' + name);
                break;
            case '2':
                console.log('Hello, welcome to JavaScript curse  ' + name);
                break;
            default :
                console.log(name + ', lo siento ,'+ idiomaRespuesta + ' no aplica como respuesta valida');
                break;
        }
        rl.close();
    });
});

// ejercicio en Equipo--Clase 23/10/2024
//Zaira
//Laura Grajeda
//Glenis
//Beatriz Arellano
//Andrea Sofia