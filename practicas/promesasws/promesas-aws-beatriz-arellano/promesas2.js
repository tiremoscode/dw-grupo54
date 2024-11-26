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
    
    )