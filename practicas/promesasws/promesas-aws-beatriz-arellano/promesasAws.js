//mostrar una lista de personajes de Dragon Ball y permitir la búsqueda de un personaje
// hacer 
//"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:/TEMP"


// Variables globales
const listaPersonajes = document.getElementById('listaPersonajes');
const personajeSeleccionado = document.getElementById('personajeSeleccionado');

function obtenerAPIDragonBall() {
  const url = "https://dragonball-api.com/api/characters"; // URL de la API de Dragon Ball
  fetch(url)
    .then( respuesta => 
        {console.log('res ' + JSON.stringify(respuesta));
            
          return respuesta.json()

        }
    
    ) // Convierte la respuesta en JSON
    .then(data => {
      data.forEach(personaje => {
        // Crear contenedor para cada personaje
        const personajeTarjeta = document.createElement('div');
        personajeTarjeta.classList.add('personajeTarjeta');
        personajeTarjeta.innerHTML = `
          <h2>${personaje.name}</h2>
          <img src="${personaje.image}" alt="${personaje.name}">
          <p><strong>Raza:</strong> ${personaje.race || "Desconocida"}</p>
          <p><strong>Universo:</strong> ${personaje.universe || "Desconocido"}</p>
          <p><strong>Especie:</strong> ${personaje.specie || "Desconocida"}</p>
        `;
        // Añadir cada personaje al contenedor de la lista
        listaPersonajes.appendChild(personajeTarjeta);
      });
    })
    .catch(error => console.log('Hubo un error al obtener los personajes:', error));
}

// Función para buscar un personaje por su nombre
function buscarPersonaje() {
  const buscarPersonaje = document.getElementById('buscarPersonaje').value.toLowerCase();

  if (buscarPersonaje) {
    fetch(`https://dragon-ball-api.herokuapp.com/api/character/name/${buscarPersonaje}`)
      .then(respuesta => respuesta.json())
      .then(personaje => {
        // Ocultar la lista de personajes y mostrar los detalles del personaje buscado
        listaPersonajes.style.display = 'none';
        personajeSeleccionado.style.display = 'block';

        // Mostrar la información del personaje
        personajeSeleccionado.innerHTML = `
          <h2>${personaje.name}</h2>
          <img src="${personaje.image}" alt="${personaje.name}">
          <p><strong>Raza:</strong> ${personaje.race || "Desconocida"}</p>
          <p><strong>Universo:</strong> ${personaje.universe || "Desconocido"}</p>
          <p><strong>Especie:</strong> ${personaje.specie || "Desconocida"}</p>
          <button onclick="regresar()">Volver a la lista</button>
        `;
      })
      .catch(error => {
        personajeSeleccionado.innerHTML = `
          <p>Personaje no encontrado. Intenta nuevamente.</p>
          <button onclick="regresar()">Volver a la lista</button>
        `;
        listaPersonajes.style.display = 'none';
        personajeSeleccionado.style.display = 'block';
      });
  }
}

// Función para regresar a la lista de personajes
function regresar() {
  listaPersonajes.style.display = 'grid'; // Mostrar la lista de personajes
  personajeSeleccionado.style.display = 'none'; // Ocultar los detalles del personaje seleccionado
  document.getElementById('buscarPersonaje').value = ''; // Limpiar la barra de búsqueda
}

// Agregar evento al botón de búsqueda
const buscarBoton = document.getElementById('buscarBoton'); // Botón de búsqueda
buscarBoton.addEventListener('click', buscarPersonaje);

// Llamar a la función para obtener los personajes al cargar la página
obtenerAPIDragonBall();
