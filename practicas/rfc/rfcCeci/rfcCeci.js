function convertirAmayus(id){
    const campo=document.getElementById(id)
    campo.value=campo.value.toUpperCase();
}

function validarDig(id) {
    const campo = document.getElementById(id);
    if (campo.value.length > 2) {
        campo.value = campo.value.slice(0, 2); 
    }
}

function Generarrfc(){
    const valor1=document.getElementById('nombre').value;
    const valor2=document.getElementById('apellidop').value;
    const valor3=document.getElementById('apellidom').value;
    const valor4=document.getElementById('anio').value;
    const valor6=document.getElementById('dia').value;
    const valor5=document.getElementById('mes').value;

    
    const rfc =valor2.substring(0,2)+valor3.substring(0,1)+valor1.substring(0,1)+valor4+valor5+valor6;
    const mostrarSuma= document.getElementById('resultado');
    mostrarSuma.innerText="Tu RFC es: "+rfc+"XXX";
}