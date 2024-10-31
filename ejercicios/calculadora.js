function sumar() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const resultado = numero1 + numero2;
    document.getElementById('resultado').innerText = 'resultado: ' + resultado;
}

function restar() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const resultado = numero1 - numero2;
    document.getElementById('resultado').innerText = 'resultado: ' + resultado;
}

function multiplicacion() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const resultado = numero1 * numero2;
    document.getElementById('resultado').innerText = 'resultado: ' + resultado;
}

function division() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    if (numero2 !== 0) {
        const resultado = numero1 / numero2;
        document.getElementById('resultado').innerText = 'resultado: ' + resultado;
    } else {
        document.getElementById('resultado').innerText = 'Error: División por cero';
    }
} 


