function obtenerRFC() {
    const nombre = document.getElementById("nombre").value;
    const apellidoPaterno = document.getElementById("apellidoPaterno").value;
    const apellidoMaterno = document.getElementById("apellidoMaterno").value;
    const diadenacimiento = document.getElementById("diadenacimiento").value;
    const mesdenacimiento = document.getElementById("mesdenacimiento").value;
    const aniodenacimiento = document.getElementById("aniodenacimiento").value;

    const aprfc = apellidoPaterno.substring(0,2);
    const amrfc = apellidoMaterno.substring(0,1);
    const nmrfc = nombre.substring(0,1);

    const concatenados = aprfc + amrfc + nmrfc + aniodenancimiento + mesdenacimiento + diadenacimiento + "xxx";
    const mostrarrfc = document.getElementById("resultado");
    mostrarrfc.innerText = concatenados;
}