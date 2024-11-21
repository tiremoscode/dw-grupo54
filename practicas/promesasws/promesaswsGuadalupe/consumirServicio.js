const myModal = document.getElementById('modalNasa')

function limpiarHTML(_selector) {
    const elemento = document.querySelector(_selector);
    if (elemento) {
        elemento.innerHTML = "";
    } else {
        console.error(`Elemento con selector "${_selector}" no encontrado.`);
    }
}

function obtenerFechaActual() {
    const fecha = new Date();
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();
    const fechaFormateada = `${anio}-${mes}-${dia}`;
    return fechaFormateada;
}

function construirURL(_fechaInicio, _fechaFin) {
    //Definición de parámetros.-.
    //Solicitar una APi Key En  
    APIKey = "9hy3ChrYfpfQQkQnfaTBtLGfuXeFrdGo844HcOVJ";
    if (!APIKey) {
        console.log("Solicitar una APi Key En https://api.nasa.gov/ y agregar en código String");
    }

    const fechaInicio = _fechaInicio ? _fechaInicio : obtenerFechaActual();
    const fechaFin = _fechaFin ? _fechaFin : obtenerFechaActual();

    //Construcción de URL, https://api.nasa.gov/ APOD Astronomy Picture of the Day .-.
    return "https://api.nasa.gov/planetary/apod?api_key=" + APIKey + "&start_date=" + fechaInicio + "&end_date=" + fechaFin;
}

function obtenerAPINasa(_fechaInicio, _fechaFin) {

    url = construirURL(_fechaInicio, _fechaFin);

    limpiarHTML("#crearTarjetas");

    fetch(url)
        .then(respuesta => respuesta.json()) // convierte la respuesta en un objeto JSON.
        .then(data => {
            console.log('success - comunicación exitosa');

            const elementId = "#crearTarjetas";

            //Me interesan sólo imagenes.-.
            for (let i = 0; i < data.length; i++) {
                //Obtener atributos.-.
                if (data[i].media_type == "image") {
                    fecha = data[i].date;
                    titulo = data[i].title;
                    describe = data[i].explanation;
                    copyright = data[i].copyright ? data[i].copyright : "";
                    urlImagen = data[i].url;

                    const colDiv = document.createElement('div');
                    colDiv.className = 'col';

                    const cardDiv = document.createElement('div');
                    cardDiv.className = 'card shadow-sm';

                    const imgTag = `<img class="card-img-top" src="${urlImagen}" alt="${titulo}" style="height: 225px; object-fit: cover;">`;

                    cardDiv.innerHTML = imgTag;

                    const describeCorto = describe.length > 150 ? describe.substring(0, 150) + "..." : describe;

                    // Crear el cuerpo de la tarjeta
                    const cardBody = `
                        <div class="card-body">
                            <p class="card-text">${describeCorto}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" data-value="${fecha}|${titulo}" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#modalNasa">Ver más</button>
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

myModal.addEventListener('shown.bs.modal', (event) => {
    const button = event.relatedTarget;
    let obtenerValor = button.getAttribute('data-value');
    let separarValor = obtenerValor.split('|');
    let fechaInicial = separarValor[0];
    let titulo = separarValor[1];

    obtenerDatosModalNasa(fechaInicial, titulo);

})

function obtenerDatosModalNasa(_fechaInicio, _titulo) {
    //Debido a que se requiere solo 1 dato, se coloca fechaInicio en parámetro de inicio y fin.-.
    url = construirURL(_fechaInicio, _fechaInicio);

    fetch(url)
        .then(respuesta => respuesta.json()) // convierte la respuesta en un objeto JSON.
        .then(data => {
            console.log('success - comunicación exitosa de una fecha');

            fecha = data[0].date;
            titulo = _titulo;
            describe = data[0].explanation;
            urlImagen = data[0].url;

            cadena = fecha + "|" + titulo + "|" + describe + "|" + urlImagen;

            document.getElementById('modalNasaFecha').textContent = fecha;
            document.getElementById('modalNasaTitulo').textContent = titulo;
            document.getElementById('modalNasaDescribe').textContent = describe;
            document.getElementById('modalNasaImagen').src = urlImagen;

        })
        .catch(error => {
            console.log('Hubo un error ', error);
        });
}
//obtenerAPINasa();
//obtenerFechaActual();