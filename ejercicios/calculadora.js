function sumar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const suma = valor1 + valor2;
    const mostrarSuma = document.getElementById('resultado');
    mostrarSuma.innerText = suma;
}

function restar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const resta = valor1 - valor2;
    const mostrarResta = document.getElementById('resultado');
    mostrarResta.innerText = resta;
}

function multiplicar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const producto = valor1 * valor2;
    const mostrarProducto = document.getElementById('resultado');
    mostrarProducto.innerText = producto;
}

function dividir() {
    const valor1 = parseFloat(document.getElementById('numero1').value);
    const valor2 = parseFloat(document.getElementById('numero2').value);

    const cociente = valor1 / valor2;
    const mostrarCociente = document.getElementById('resultado');
    mostrarCociente.innerText = cociente;
}