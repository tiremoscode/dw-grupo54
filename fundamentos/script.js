function holaMundo() {
    console.log('Hola Mundo - Grupo 54');
    alert('Hola Mundo México - Grupo 54');

    var variable1 = 10;
    var variable2 = 20;

    var suma = variable1 + variable2;
    var resta = variable1 - variable2;

    console.log('El valor de la suma es ' + suma);
    console.log('El valor de la resta es ' + resta);
}

function factorial(valor) {
    if (valor == 0) {
        return 1;
    } else {
        return valor * factorial(valor - 1);
    }
}

function testFactorial() {
    console.log('Pruebaaaaaaa');
    console.log(factorial(10));
    /*
    6 * 5 * 4 * 3 * 2 * 1;
    30 * 4 * 3 * 2 * 1;
    120 * 3 * 2 * 1;
    360 * 2 * 1;
    720 * 1;
    720
    */

    /*
    10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1;
    90 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1;
    720 * 7 * 6 * 5 * 4 * 3 * 2 * 1;
    5040 * 6 * 5 * 4 * 3 * 2 * 1;
    30240 * 5 * 4 * 3 * 2 * 1;
    151200 * 4 * 3 * 2 * 1;
    604800 * 3 * 2 * 1;
    1814400 * 2 * 1;
    3628800 * 1;
    3628800
    */
}