// Base de datos de Pokémon
const pokemonDatabase = {
    pikachu: {
        nombre: "Pikachu",
        tipo: "Eléctrico",
        ataque: "Impact Trueno",
        color: "Amarillo",
        evoluciones: ["Raichu"],
    },
    bulbasaur: {
        nombre: "Bulbasaur",
        tipo: "Planta",
        ataque: "Látigo Cepa",
        color: "Verde",
        evoluciones: ["Ivysaur", "Venusaur"],
    },
    charmander: {
        nombre: "Charmander",
        tipo: "Fuego",
        ataque: "Lanza llama",
        color: "Rojo",
        evoluciones: ["Charmeleon", "Charizard"],
    },
    squirtle: {
        nombre: "Squirtle",
        tipo: "Agua",
        ataque: "Chorro de Agua",
        color: "Azul",
        evoluciones: ["Wartortle", "Blastoise"],
    },
};

// Función para obtener un Pokémon
const obtenerPokemon = (nombrePokemon) => {
    return new Promise((resolve, reject) => {
        if (!nombrePokemon) {
            reject("El nombre del Pokémon no puede estar vacío.");
            return;
        }

        const pokemon = pokemonDatabase[nombrePokemon.toLowerCase()]; // No sensible a mayúsculas
        if (pokemon) {
            resolve(pokemon);
        } else {
            reject(`Pokémon "${nombrePokemon}" no encontrado. ¡Capturar en el futuro!`);
        }
    });
};

// Función para mostrar detalles del Pokémon
const mostrarDetallesPokemon = (pokemon) => {
    console.log("Pokémon encontrado:");
    console.log(`Nombre: ${pokemon.nombre}`);
    console.log(`Tipo: ${pokemon.tipo}`);
    console.log(`Ataque: ${pokemon.ataque}`);
    console.log(`Color: ${pokemon.color}`);
    console.log(`Evoluciones: ${pokemon.evoluciones.join(", ")}`);
};

// Usar async/await para consultar Pokémon
const buscarPokemon = async (nombrePokemon) => {
    try {
        const pokemonEncontrado = await obtenerPokemon(nombrePokemon);
        mostrarDetallesPokemon(pokemonEncontrado);
    } catch (error) {
        console.error(error);
    }
};

// Llamadas a la función
buscarPokemon("Bulbasaur");
buscarPokemon("Chandelure");
buscarPokemon("Froslass");
