function holaMundo(nombre) {
    console.log('Hola ' + nombre);
}

function helloWorld(name) {
    console.log('Hello ' + name);
}

function ciaoMondo(nome) {
    console.log('Ciao ' + nome);
}

function niHao(_nombre){
    console.log("ni hao " + _nombre);
}

function guadalupe(_nombre){
    const funcionesLupita = [holaMundo, helloWorld, ciaoMondo, niHao];
    funcionesLupita.forEach(funcion => funcion(_nombre));
}

guadalupe('Guadalupe');
holaMundo('Alberto');
helloWorld('Zaira');
ciaoMondo('Rebeca');


