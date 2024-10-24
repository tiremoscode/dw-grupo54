const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Es(name) {
    console.log('Hola ' + name);
}

function Ing(name) {
    console.log('Hello ' + name);
}

function French(name) {
    console.log('Bonjour ' + name);
}

function Italiano(name) {
    console.log('Ciao ' + name);
}

rl.question('¿Cómo te llamas? ', (name) => {
rl.question('¿En qué idioma quieres que te salude? Las opciones con las que cuento son 1.Español 2.Ingles 3.Francés 4.Italiano. Escribe el número: ', (IdiomaSeleccionado) => {    
    
    switch (IdiomaSeleccionado){
        case '1':
            Es(name);
            break;
        case '2':
            Ing(name);
            break;
        case '3':
            French(name);
            break;
        case '4':
            Italiano(name);
            break;     
    }
    

    rl.close();
});
});