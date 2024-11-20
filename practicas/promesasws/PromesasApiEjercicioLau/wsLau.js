function obtenerAPIHarryPotter() {
    const url = "https://hp-api.onrender.com/api/characters/house/gryffindor#";
    let resultado ="";
    let todomitexto ="";
    fetch(url)
        .then(respuesta => respuesta.json()) // convierte la respuesta en un objeto JSON.
        .then(data => {
            console.log('success - comunicación exitosa');
            const cuantosHay = data.length;
            for (let i = 0; i < cuantosHay; i++) {
                if(data[i].patronus==""){
                    resultado = "No tiene";
                }else{resultado = data[i].patronus}
                todomitexto= todomitexto + <br></br> 'Nombre ' + data[i].name + ' Vive: ' + data[i].alive + '  Patronus: ' + resultado;
            }

        })
        .catch(error => {
            console.log('Hubo un error ', error);
        });
    
}
const divRfc = document.getElementById('RFC');
divRfc.innerHTML =obtenerAPIHarryPotter();
