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
                ataque: "Látigo Cepa",
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
        }

        // Comprobar si el pokemon existe en nuestra base de datos.
        const pokemon = pokemonDatabase[nombrePokemon.toLowerCase()];  //No sensible a mayúsculas
        if (pokemon) {
            resolve(pokemon);
        } else {
            reject('Pokémon no encontrado. ¡Capturar en el futuro!');
        }
    })
};

obtenerPokemon('Bulbasaur')
    .then((pokemonEncontrado) => {
        console.log('Pokémon encontrado');
        console.log(`Nombre: ${pokemonEncontrado.nombre}`);
        console.log(`Tipo: ${pokemonEncontrado.tipo}`);
        console.log(`Ataque: ${pokemonEncontrado.ataque}`);
        console.log(`Color: ${pokemonEncontrado.color}`);
        console.log(`Evoluciones: ${pokemonEncontrado.evoluciones.join(', ')}`);
    })
    .catch((error) => {
        console.log(error);
    });

obtenerPokemon('Chandelure')
    .then((pokemonEncontrado) => {
        console.log('Pokémon encontrado');
        console.log(`Nombre: ${pokemonEncontrado.nombre}`);
        console.log(`Tipo: ${pokemonEncontrado.tipo}`);
        console.log(`Ataque: ${pokemonEncontrado.ataque}`);
        console.log(`Color: ${pokemonEncontrado.color}`);
        console.log(`Evoluciones: ${pokemonEncontrado.evoluciones.join(', ')}`);
    })
    .catch((error) => {
        console.log(error);
    });

obtenerPokemon('Froslass')
    .then((pokemonEncontrado) => {
        console.log('Pokémon encontrado');
        console.log(`Nombre: ${pokemonEncontrado.nombre}`);
        console.log(`Tipo: ${pokemonEncontrado.tipo}`);
        console.log(`Ataque: ${pokemonEncontrado.ataque}`);
        console.log(`Color: ${pokemonEncontrado.color}`);
        console.log(`Evoluciones: ${pokemonEncontrado.evoluciones.join(', ')}`);
    })
    .catch((error) => {
        console.log(error);
    });
