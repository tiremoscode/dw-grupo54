const pokemonDatabase = {
  pikachu: {
    nombre: "Pikachu",
    tipo: "Eléctrico",
    ataque: "Impact Trueno",
    color: "Amarillo"
  },
  bulbasaur: {
    nombre: "Bulbasaur",
    tipo: "Planta",
    ataque: "Latigo Cepa",
    color: "Verde"
  },
  charmander: {
    nombre: "Charmander",
    tipo: "Fuego",
    ataque: "Lanza llama",
    color: "Rojo"
  },
  squirtle: {
    nombre: "Squirtle",
    tipo: "Agua",
    ataque: "Chorro de Agua",
    color: "Azul"
  }
};

const obtenerPokemon = (nombrePokemon) => {
  return new Promise((resolve, reject) => {
    const pokemon = pokemonDatabase[nombrePokemon.toLowerCase()];
    if (pokemon) {
      resolve('El pokemon si existe en la pokedex');
    } else {
      reject('No se encontró ese Pokémon, ¡capturar en futuro!');
    }
  });
};

const { pikachu, bulbasaur, charmander, squirtle } = pokemonDatabase;

obtenerPokemon('Pikachu')
  .then((mensaje) => {
    console.log(mensaje); // Muestra el mensaje de éxito
    console.log(pikachu); // Muestra el objeto Pikachu

    // Agregamos la evolución a cada Pokémon
    pokemonDatabase.pikachu.evolucion = "Raichu";
    pokemonDatabase.bulbasaur.evolucion = "Ivysaur";
    pokemonDatabase.charmander.evolucion = "Charizard";
    pokemonDatabase.squirtle.evolucion = "Wartortle";

    console.log(`La evolución secreta de Pikachu es: ${pikachu.evolucion}`);
  })
  .catch((error) => {
    console.log(error);
  });

const findPokemon = (color) => {
  return new Promise((resolve, reject) => {
    const pokemonEncontrado = Object.values(pokemonDatabase).find(
      (pokemon) => pokemon.color === color
    );

    if (!pokemonEncontrado || !['rosa', 'café', 'morado'].includes(pokemonEncontrado.color)) {
      resolve('Para tener más colores, se necesitan atrapar nuevos Pokémones');
    } else {
      reject('¡Tenemos Pokémones de muchos colores!');
    }
  });
};

findPokemon('rosa', 'café', 'morado')
  .then((resultadoBusqueda) => {
    const nuevosPokemones =  {
      jigglypuff: {
        nombre: "Jigglypuff",
        tipo: "Normal",
        ataque: "Canto",
        color: "Rosa"
      },
      koffing: {
        nombre: "Eeevee",
        tipo: "Tierra",
        ataque: "Ojitos tiernos",
        color: "café"
      },
      gengar: {
        nombre: "Gengar",
        tipo: "Fantasma/Veneno",
        ataque: "Bola Sombra",
        color: "Morado"
      }};
    
      Object.assign(pokemonDatabase, nuevosPokemones);

      console.log(`${resultadoBusqueda}, Nuevos Pokémones Atrapados: ${nuevosPokemones.jigglypuff.nombre}, ${nuevosPokemones.koffing.nombre} y ${nuevosPokemones.gengar.nombre}` );
      console.log("Estos son todos tus pokemones: ", pokemonDatabase);
      
  })
  .catch((error) => {
    console.log(error);
  });

