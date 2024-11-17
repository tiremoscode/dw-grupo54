function limpiarHTML(_selector) {
    const elemento = document.querySelector(_selector);
    if (elemento) {
        elemento.innerHTML = ""; // Limpia el contenido del elemento
    } else {
        console.error(`Elemento con selector "${_selector}" no encontrado.`);
    }
}

function obtenerFechaActual(){
    const fecha = new Date();
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();
    const fechaFormateada = `${anio}-${mes}-${dia}`;
    return fechaFormateada;
}

function obtenerAPINasa( _fechaInicio, _fechaFin) {

    //Definición de parámetros.-.
    APIKey = "9hy3ChrYfpfQQkQnfaTBtLGfuXeFrdGo844HcOVJ";

    const fechaInicio = _fechaInicio ? _fechaInicio : obtenerFechaActual();
    const fechaFin = _fechaFin ? _fechaFin : obtenerFechaActual();

    //Construcción de URL, https://api.nasa.gov/ APOD Astronomy Picture of the Day .-.
    const url = "https://api.nasa.gov/planetary/apod?api_key=" + APIKey + "&start_date=" + fechaInicio + "&end_date=" + fechaFin;
    
    limpiarHTML("#crearTarjetas");

    fetch(url)
        .then(respuesta => respuesta.json()) // convierte la respuesta en un objeto JSON.
        .then(data => {
            console.log('success - comunicación exitosa');

            const elementId = "#crearTarjetas";

            //Me interesan sólo imagenes.-.
            for (let i = 0; i < data.length; i++) {
                //Obtener atributos.-.
                if(data[i].media_type == "image" ){
                    fecha = data[i].date;
                    titulo = data[i].title;
                    describe = data[i].explanation;
                    copyright = data[i].copyright ? data[i].copyright : "Especificado en la imagen";
                    urlImagen = data[i].url;

                    const colDiv = document.createElement('div');
                    colDiv.className = 'col';

                    const cardDiv = document.createElement('div');
                    cardDiv.className = 'card shadow-sm';

                    const imgTag = `<img class="card-img-top" src="${urlImagen}" alt="${titulo}" style="height: 225px; object-fit: cover;">`;

                    cardDiv.innerHTML = imgTag;

                    const describeCorto = describe.length > 50 ? describe.substring(0, 150) + "..." : describe;

                    // Crear el cuerpo de la tarjeta
                    const cardBody = `
                        <div class="card-body">
                            <p class="card-text">${describeCorto}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Ver más</button>
                                </div>
                                <small class="text-body-secondary">${fecha}</small>
                            </div>
                        </div>
                    `;
                    cardDiv.innerHTML += cardBody;

                    // Insertar la tarjeta dentro del contenedor principal
                    colDiv.appendChild(cardDiv);
                    document.querySelector(elementId).appendChild(colDiv);
                }
                
            }

        })
        .catch(error => {
            console.log('Hubo un error ', error);
        });
}

//obtenerAPINasa();
//obtenerFechaActual();