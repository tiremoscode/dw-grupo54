// Base de datos simulada de Pokémon
const pokemonDatabase = {
    pikachu: {
        nombre: "Pikachu",
        tipo: "Electrico",
        ataque: "Impact Trueno",
        color: "Amarillo",
        evoluciones: ["Raichu"]
    },
    bulbasaur: {
        nombre: "Bulbasaur",
        tipo: "Planta",
        ataque: "Latigo Cepa",
        color: "Verde",
        evoluciones: ["Ivysaur", "Venusaur"]
    },
    charmander: {
        nombre: "Charmander",
        tipo: "Fuego",
        ataque: "Lanzallamas",
        color: "Rojo",
        evoluciones: ["Charmeleon", "Charizard"]
    },
    squirtle: {
        nombre: "Squirtle",
        tipo: "Agua",
        ataque: "Chorro de Agua",
        color: "Azul",
        evoluciones: ["Wartortle", "Blastoise"]
    }
};

// Función para obtener un Pokémon de la base de datos
const obtenerPokemon = (nombrePokemon) => {
    return new Promise((resolve, reject) => {
        const pokemon = pokemonDatabase[nombrePokemon.toLowerCase()];
        if (pokemon) {
            resolve(pokemon); // Devuelve el Pokémon si se encuentra
        } else {
            reject(`El Pokémon "${nombrePokemon}" no está en la base de datos.`);
        }
    });
};

// Función para mostrar información de un Pokémon
const mostrarInformacion = (pokemon) => {
    console.log(`Nombre: ${pokemon.nombre}`);
    console.log(`Tipo: ${pokemon.tipo}`);
    console.log(`Ataque: ${pokemon.ataque}`);
    console.log(`Color: ${pokemon.color}`);
    if (pokemon.evoluciones) {
        console.log(`Evoluciones: ${pokemon.evoluciones.join(", ")}`);
    } else {
        console.log(`Evoluciones: No registradas.`);
    }
};

// Ejemplos de uso:
obtenerPokemon("Pikachu")
    .then((pokemon) => mostrarInformacion(pokemon))
    .catch((error) => console.log(error));

obtenerPokemon("Eevee")
    .then((pokemon) => mostrarInformacion(pokemon))
    .catch((error) => console.log(error));

obtenerPokemon("Charmander")
    .then((pokemon) => mostrarInformacion(pokemon))
    .catch((error) => console.log(error));

obtenerPokemon("Snorlax")
    .then((pokemon) => mostrarInformacion(pokemon))
    .catch((error) => console.log(error));
