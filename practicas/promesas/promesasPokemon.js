const obtenerPokemon = async (nombrePokemon) => {
    // Simulamos una base de datos de Pokémon con información adicional
    const pokemonDatabase = {
        "pikachu": { nombre: "Pikachu", tipo: "Eléctrico", ataque: "Impact Trueno", color: "Amarillo", evoluciones: ["Raichu"] },
        "bulbasaur": { nombre: "Bulbasaur", tipo: "Planta", ataque: "Látigo Cepa", color: "Verde", evoluciones: ["Ivysaur", "Venusaur"] },
        "charmander": { nombre: "Charmander", tipo: "Fuego", ataque: "Lanzallamas", color: "Rojo", evoluciones: ["Charmeleon", "Charizard"] },
        "squirtle": { nombre: "Squirtle", tipo: "Agua", ataque: "Chorro de Agua", color: "Azul", evoluciones: ["Wartortle", "Blastoise"] }
    };

    const pokemon = pokemonDatabase[nombrePokemon.toLowerCase()];
    if (pokemon) {
        return pokemon;
    } else {
        throw new Error('No se encontró ese Pokemon, ¡capturar en el futuro!');
    }
};

// Función para imprimir los detalles de un Pokémon
const mostrarPokemon = (pokemon) => {
    console.log(`¡Encontré al Pokemon!`);
    console.log(`Nombre: ${pokemon.nombre}`);
    console.log(`Tipo: ${pokemon.tipo}`);
    console.log(`Ataque: ${pokemon.ataque}`);
    console.log(`Color: ${pokemon.color}`);
    console.log(`Evoluciones: ${pokemon.evoluciones ? pokemon.evoluciones.join(', ') : 'No tiene evoluciones registradas.'}`);
};

// Búsqueda de Pokémon en la base de datos
const buscarPokemon = async (nombre) => {
    try {
        const pokemon = await obtenerPokemon(nombre);
        mostrarPokemon(pokemon);
    } catch (error) {
        console.log(error.message);
    }
};

// Ejecución de búsquedas de Pokémon
buscarPokemon('Charmander');
buscarPokemon('Eevee');
buscarPokemon('Vulpix');
