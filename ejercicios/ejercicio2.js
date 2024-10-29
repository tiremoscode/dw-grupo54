const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Se pregunta el nombre al usuario
rl.question('¿Cómo te llamas?', (name) => {
    console.log('Hola, bienvenido al Curso de JavaScript ' + name);

    // Se pregunta en qué idioma desea el saludo
    rl.question("¿En qué idioma quieres que te salude? (escribe 'español', 'ingles' o 'frances') ", (idioma) => {

        // Ahora se genera el saludo en el idioma que deseamos usando else if y else
        if (idioma.toLowerCase() === "español") {
            console.log(`Hola, ${name}! Espero que estés teniendo un día excelente. ¡Es un gusto saludarte!"`);
        } else if (idioma.toLowerCase() === "ingles") {
            console.log(`Hello, ${name}! Wishing you a fantastic day ahead. It's great to connect with you!`);
        } else if (idioma.toLowerCase() === "frances") {
            console.log(`Bonjour, ${name}! J’espère que tu passes une excellente journée. Ça fait plaisir de te voir!`);
        } else {
            console.log("Lo siento, no entiendo la palabra que has escrito, por favor selecciona entre español, ingles o frances");
        }


        rl.close();
    });
});