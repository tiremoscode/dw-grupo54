const obtenerPokemon = (nombrePokemon) => {
    return new Promise((resolve, reject) => {
    
        // Simular una solicitud asincrona de información de un pokemón
        const pokemonDatabase = {
            "pikachu": {
                nombre: "Pikachu",
                tipo: "Eléctrico",
                ataque: "Impact Trueno",
                color: "Amarillo",
                evoluciones: ["Raichu"]
            },
            "bulbasaur": {
                nombre: "Bulbasaur",
                tipo: "Planta",
                ataque: "Latigo Cepa",
                color: "Verde",
                evoluciones: ["Ivysaur", "Venusaur"]
            },
            "charmander": {
                nombre: "Charmander",
                tipo: "Fuego",
                ataque: "Lanza llama",
                color: "Rojo",
                evoluciones: ["Charmeleon", "Charizard"]
            },
            "squirtle": {
                nombre: "Squirtle",
                tipo: "Agua",
                ataque: "Chorro de Agua",
                color: "Azul",
                evoluciones: ["Wartortle", "Blastoise"]
            }
        };

        const pokemon = pokemonDatabase[nombrePokemon.toLowerCase()];
        if (pokemon) {
            resolve(pokemon); 
        } else {
            reject(`El Pokémon ${nombrePokemon} no está en la base de datos.`);
        }
    });
};

const mostrarInformacion = (pokemon) => {
    console.log('El pokemon si existe en la pokedex');
    console.log(`Nombre: ${pokemon.nombre}`);
    console.log(`Tipo: ${pokemon.tipo}`);
    console.log(`Ataque: ${pokemon.ataque}`);
    console.log(`Color: ${pokemon.color}`);
    if (pokemon.evoluciones) {
        console.log(`Evoluciones: ${pokemon.evoluciones.join(", ")}`);
    }
};

// Si existe
obtenerPokemon('Pikachu')
    .then((pokemonEncontrado) => {
        mostrarInformacion(pokemonEncontrado);
    })
    .catch((error) => {
        console.log(error);
    });
//No existe
obtenerPokemon('Eevee')
    .then((pokemonEncontrado) => {
        mostrarInformacion(pokemonEncontrado);
    })
    .catch((error) => {
        console.log(error);
    });
//Si existe
obtenerPokemon('Charmander')
    .then((pokemonEncontrado) => {
        mostrarInformacion(pokemonEncontrado);
    })
    .catch((error) => {
        console.log(error);
    });

//No existe
obtenerPokemon('Butterfree')
    .then((pokemonEncontrado) => {
        mostrarInformacion(pokemonEncontrado);
    })
    .catch((error) => {
        console.log(error);
    });

//No existe
obtenerPokemon('Cubone')
    .then((pokemonEncontrado) => {
        mostrarInformacion(pokemonEncontrado);
    })
    .catch((error) => {
        console.log(error);
    });
//Miriam Andrew
