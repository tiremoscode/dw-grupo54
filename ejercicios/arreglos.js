// Arreglo.
// Una estructura de datos que permite almacenar múltiples valores en una sola variable.
// Estos pueden tener números, cadenas, oibjetos u otros arreglos.

// características
// Indexed. Los elementos de un arreglo se almacenan en posiciones indexadas, comenzando en cero.
// dinámicos. Podemos agregar o eliminar elementos de manera fácil y el tamaño puede llegar a cambiar a lo largo del tiempo.

// Estructura base de un arreglo.
// Esta irá dentro de dos corchetes, irá separado por comas

// ¿Cómo declarar un arreglos
// 1. Usando la notación de corchete.

const frutas = ['Manzana', 'Plátano', 'Naranja'];

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