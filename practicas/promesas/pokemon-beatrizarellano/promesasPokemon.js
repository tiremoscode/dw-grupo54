// Base de datos inicial de Pokémon
const pokemonDatabase = {
    pikachu: {
      nombre: "Pikachu",
      tipo: "Electrico",
      ataque: "Impact Trueno",
      color: "Amarillo",
      evolucion: "Raichu"
    },
    bulbasaur: {
      nombre: "Bulbasaur",
      tipo: "Planta",
      ataque: "Latigo Cepa",
      color: "Verde",
      evolucion: "Ivysaur"
    },
    charmander: {
      nombre: "Charmander",
      tipo: "Fuego",
      ataque: "Lanza Llama",
      color: "Rojo",
      evolucion: "Charizard"
    },
    squirtle: {
      nombre: "Squirtle",
      tipo: "Agua",
      ataque: "Chorro de Agua",
      color: "Azul",
      evolucion: "Wartortle"
    }
  };
  
  // Funcion para obtener un Pokemon por nombre
  const obtenerPokemon = (nombrePokemon) => {
    return new Promise((resolve, reject) => {
      const pokemon = pokemonDatabase[nombrePokemon.toLowerCase()];
      if (pokemon) {
        resolve(pokemon); // Devuelve el Pokemon encontrado
      } else {
        reject(`No se encontro el Pokemon ${nombrePokemon}, ¡intenta capturarlo!`);
      }
    });
  };
  
  // Funcion para agregar nuevos Pokemon
  const agregarNuevosPokemones = (nuevosPokemones) => {
    return new Promise((resolve) => {
      Object.assign(pokemonDatabase, nuevosPokemones);
      resolve("Nuevos Pokemones agregados exitosamente.");
    });
  };
  
  // Promesa para buscar Pokemon por color
  const buscarPokemonPorColor = (color) => {
    return new Promise((resolve, reject) => {
      const pokemonEncontrado = Object.values(pokemonDatabase).find(
        (pokemon) => pokemon.color.toLowerCase() === color.toLowerCase()
      );
      if (pokemonEncontrado) {
        resolve(pokemonEncontrado);
      } else {
        reject(`No hay Pokemon del color ${color}, ¡necesitas atrapar nuevos!`);
      }
    });
  };
  
  // Nuevos Pokemones
  const nuevosPokemones = {
    jigglypuff: {
      nombre: "Jigglypuff",
      tipo: "Normal",
      ataque: "Canto",
      color: "Rosa",
      evolucion: "Wigglytuff"
    },
    eevee: {
      nombre: "Eevee",
      tipo: "Normal",
      ataque: "Ataque Rapido",
      color: "Cafe",
      evolucion: "Vaporeon, Jolteon o Flareon"
    },
    gengar: {
      nombre: "Gengar",
      tipo: "Fantasma/Veneno",
      ataque: "Bola Sombra",
      color: "Morado",
      evolucion: "Mega Gengar"
    }
  };
  
  // Ejecucion del flujo
  obtenerPokemon("Pikachu")
    .then((pokemon) => {
      console.log("Pokemon encontrado:", pokemon);
      console.log(
        `El Pokemon ${pokemon.nombre} tiene los siguientes datos: Tipo: ${pokemon.tipo}, Ataque: ${pokemon.ataque}, Color: ${pokemon.color}, Evolucion: ${pokemon.evolucion}`
      );
    })
    .catch((error) => {
      console.log(error);
    });
  
  buscarPokemonPorColor("Rosa")
    .then((pokemon) => {
      console.log(`Pokemon encontrado del color Rosa: ${pokemon.nombre}`);
    })
    .catch((error) => {
      console.log(error);
      return agregarNuevosPokemones(nuevosPokemones);
    })
    .then((mensaje) => {
      if (mensaje) console.log(mensaje);
      console.log("Nuevos Pokemones agregados:", nuevosPokemones);
      console.log("Base de datos actualizada:", pokemonDatabase);
    });
  