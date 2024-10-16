function holaMundo(nombre) {
    console.log('Hola ' + nombre);
}

function helloWorld(name) {
    console.log('Hello ' + name);
}

function ciaoMondo(nome) {
    console.log('Ciao ' + nome);
}

function holaGrupo54(alumna) {
    console.log('Bienvenida al curso' + alumna);
}

function niHao(nombre){
    console.log('Nihao ' + nombre);
}
function guadalupe(_nombre){
    const funcionesLupita = [holaMundo, helloWorld, ciaoMondo, niHao];
    funcionesLupita.forEach(funcion => funcion('Lupita'));
}

guadalupe('Guadalupe');
holaMundo('Alberto');
helloWorld('Zaira');
helloWorld('Glenis');
helloWorld ('Sofia');
ciaoMondo('Rebeca');
holaGrupo54('KarlaFlores');
