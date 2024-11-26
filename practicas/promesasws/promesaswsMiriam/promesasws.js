// Variables globales 
const listaPokemones= document.getElementById('listaPokemones');
const pokemonSeleccionado = document.getElementById('pokemonSeleccionado');

function obtenerAPIPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=52";
  fetch(url)
    .then(respuesta => respuesta.json()) // convierte la respuesta en un objeto JSON.
    .then(data => {
      data.results.forEach(pokemon => {// Recorremos los resultados para obtener los detalles de cada Pokémon
        fetch(pokemon.url)
          .then(respuesta => respuesta.json())
          .then(pokemones => {
            // contenedor para cada Pokémon
            const pokemonTarjeta = document.createElement('div');
            pokemonTarjeta.classList.add('pokemonTarjeta');
            pokemonTarjeta.innerHTML = `
              <h2>${pokemones.name.charAt(0).toUpperCase() + pokemones.name.slice(1)}</h2>
              <img src="${pokemones.sprites.other['official-artwork'].front_default}" alt="${pokemones.name}">
              <p><strong>Tipos:</strong> ${pokemones.types.map(type => type.type.name).join(', ')}</p>
              <p><strong>Habilidades:</strong> ${pokemones.abilities.map(ability => ability.ability.name).join(', ')}</p>
              <p><strong>Altura:</strong> ${pokemones.height / 10} m</p>
              <p><strong>Peso:</strong> ${pokemones.weight / 10} kg</p>
            `;
            // Añadir cada Pokémon al contenedor de la lista
            listaPokemones.appendChild(pokemonTarjeta);
          })
          .catch(error => console.log('Error al obtener los detalles del Pokémon:', error));
      });
    })
    .catch(error => console.log('Hubo un error:', error));
}

// Función para buscar un Pokémon por su nombre
function buscarPokemon() {
  const buscarPokemon = document.getElementById('buscarPokemon').value.toLowerCase();

  if (buscarPokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${buscarPokemon}`)
      .then(respuesta => respuesta.json())
      .then(pokemon => {
        // Ocultar la lista de Pokémones y mostrar los detalles del Pokémon buscado
        listaPokemones.style.display = 'none';
        pokemonSeleccionado.style.display = 'block';

        // Mostrar la información del Pokémon 
        pokemonSeleccionado.innerHTML = `
          <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
          <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
          <p><strong>Tipos:</strong> ${pokemon.types.map(type => type.type.name).join(', ')}</p>
          <p><strong>Habilidades:</strong> ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
          <p><strong>Altura:</strong> ${pokemon.height / 10} m</p> 
          <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
          <p><strong>Estadísticas:</strong></p>
          <ul>
            ${pokemon.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
          </ul>
          <button onclick="regresar()">Volver a la lista</button>
        `;
      })
      .catch(error => {
        pokemonSeleccionado.innerHTML = `
          <p>Pokémon no encontrado. Intenta nuevamente.</p>
          <button onclick="regresar()">Volver a la lista</button>
        `;
        listaPokemones.style.display = 'none';
        pokemonSeleccionado.style.display = 'block';
      });
  }
}

// Función para regresar a la lista de pokemones
function regresar() {
  listaPokemones.style.display = 'grid'; // Mostrar la lista de los pkemones 
  pokemonSeleccionado.style.display = 'none'; // Ocultar los detalles del pokemon seleccionado
  document.getElementById('buscarPokemon').value = ''; // Limpiar la barra de búsqueda
}

const buscarBoton = document.getElementById('buscarBoton'); //Botón búsqueda
buscarBoton.addEventListener('click', buscarPokemon);

obtenerAPIPokemon();

//Miriam Andrew 