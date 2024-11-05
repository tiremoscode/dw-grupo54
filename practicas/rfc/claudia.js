function calcularfc () {
    const nombre = document.getElementById('nombre').value;
    const apellidoPaterno = document.getElementById('apellidoPaterno').value;
    const apellidoMaterno = document.getElementById('apellidoMaterno').value;
    const diaNacimiento= document.getElementById('diaNacimiento').value;
    const mesNacimiento= document.getElementById('mesNacimiento').value;
    const anoNacimiento= document.getElementById('anoNacimiento').value;

    const aprfc = apellidoPaterno.substring(0,2);
    const amrfc = apellidoMaterno.substring(0,1);
    const nmrfc = nombre.substring(0,1);


    const concatenados = aprfc + amrfc + nmrfc + anoNacimiento + mesNacimiento + diaNacimiento + "XXX";
    const mostrarrfc = document.getElementById('resultado');
    mostrarrfc.innerText = concatenados;
}
