// Arreglo.
// Una estructura de datos que permite almacenar múltiples valores en una sola variable.
// Estos pueden tener números, cadenas, oibjetos u otros arreglos.

// Características
// Indexed. Los elementos de un arreglo se almacenan en posiciones indexadas, comenzando en cero.
// dinámicos. Podemos agregar o eliminar elementos de manera fácil y el tamaño puede llegar a cambiar a lo largo del tiempo.

// Estructura base de un arreglo.
// Esta irá dentro de dos corchetes, irá separado por comas

// ¿Cómo declarar un arreglos
// 1. Usando la notación de corchete.

const frutas = ['Manzana', 'Plátano', 'Naranja', 'Uvas'];

// 2. Usando el método constructor Array.
const verduras = new Array('Lechuga', 'Jitomate', 'Zanahoria');

console.log(frutas);
console.log(verduras);

const frutasVacio = [];
const frutasConstructor = new Array();
console.log(frutasVacio);

// Acceder a los elementos de un arreglo.
console.log(frutas[1]);
console.log(frutas[2]);

// Modificar elementos. Cambiar el valor de un elemento utilizando su índice.
frutas[1] = 'Kiwi';
console.log(frutas);

// Métodos para trabajar con Arreglos en JS
// 1. Push. Agrega uno o más elementos AL FINAL del arreglo y nos lo devuelve.
frutas.push('Mango');
console.log(frutas);

// 2. Pop. Elimina el último elemento del arreglo y nos lo devuelve.
const frutaEliminada = frutas.pop();
console.log(frutaEliminada);
console.log(frutas);

// 3. Shift. Eliminar el primer elemento del arreglo y nos lo devuelve.
const primerFruta = frutas.shift();
console.log(primerFruta);
console.log(frutas);

// 4. Unshift. Agrega uno o más elementos al inicio del arreglo y nos
// devuelve el nuevo arreglo actualizado.
frutas.unshift('Fresa');
console.log(frutas);

// 5. Concat. Combinar o unir dos arreglos y devolver un nuevo arreglo.
const masFrutas = ['Sandía', 'Piña'];
const todasLasFrutas = frutas.concat(masFrutas);
console.log(todasLasFrutas);

// 6. Slice. Devuelve una copia superficial de una porción del arreglo como un nuevo arreglo.
// El primer valor, indicará la posición. (Limie de Inicio)
// El segundo valor, el valor de la fruta hasta la que quiero que llegue. (Limite Final)
const algunasFrutas = frutas.slice(1, 3);
console.log(algunasFrutas);

// 7. Splice. Cambia el contenido de un arreglo eliminando elementos existentes
// El primer valor indicará la posición de elementos donde haremos la sustitución
// El segundo número indicará el número de elmentos a eliminar del arreglo original.
// frutas.splice(1, 2, 'Mora');
//frutas.splice(1, 2, 'Mora', 'Aguacate');
//frutas.splice(1, 1, 'Mora', 'Aguacate');
frutas.splice(0, 1, 'Mora', 'Aguacate');
frutas.splice(1, 1, 'Melocotón');
console.log(frutas);

// 8. forEach. Ejecuta una función proporcionada una vez por cada elemento del arreglo.
frutas.forEach((fruta) => {
    console.log(fruta);
});

// 9. map. Crear un nuevo arreglo con lo resultaos de aplicar una función a cada elemento del arreglo.
const frutasMayusculas = frutas.map((miFruta) => miFruta.toLowerCase());
console.log(frutasMayusculas);

// 10. filter. Crear un nuevo arreglo con todo los elementos que cumplan con una condición implementada en la función.
const frutasConNombreMayorA4 = frutas.filter((frutaBusqueda) => frutaBusqueda.length > 4);
console.log(frutasConNombreMayorA4);

// 11. find. Devolver el primer elemento que cumpla con la condición dada en la función.
const buscarFrutaConN = frutas.find((frutaBuscada) => frutaBuscada.startsWith('n'));
console.log(buscarFrutaConN);

// Valeria - SOSTIENE que dara un conflicto, pero si no hay conflicto hay naranja
// Ivette - Yo me quedo con Naranja
// Karla - Saldrán melocotón y naranja
// Marisol - Lo que dijo valeria x2
// Cecilia - Salen 2 (Naranja y Melocoton);
// bety - Undefined - Conflictos con mayusculas en los nombres.
// Miriam - Naranja

// 1.5 - Bety
// 0.25 - Cecilia

// esta es la respuesta Correcta del Personaje Principal = 'Armando';

const respuestaCorrecta = ['Armando', 'Beatriz'];

const respuestaValeria = ['Fernando', 'Lety'];
const respuestaBety = ['Armando', 'Bety'];

let puntosValeria = 0;
let puntosBety = 0;

for (let i = 0; i < respuestaCorrecta.length; i++) {
    if (respuestaValeria[i] === respuestaCorrecta[i]) {
        puntosValeria++;
    }
    else if (respuestaBety[i] === respuestaCorrecta[i]) {
        puntosBety++;
    }
}

console.log('Valeria obtuvo ' + puntosValeria);
console.log('Bety obtivo ' + puntosBety);