const obtenerPokemon = (nombrePokemon) => {
    return new Promise((resolve, reject) => {

        // Se simula una base de datos de Pokemon con información adicional de las evoluciones
        // de cada pokemon
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
                ataque: "Lanzallamas",
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

        // Aquí se comprueba si el Pokémon existe en nuestra base de datos
        const pokemon = pokemonDatabase[nombrePokemon.toLowerCase()];
        if (pokemon) {
            resolve(pokemon);  
        } else {
            reject('No se encontró ese Pokemon, ¡capturar en el futuro!');
        }
    });
};

// Después se busca un Pokemon en la base de datos y se muestra su información completa
obtenerPokemon('Charmander')
    .then((pokemon) => {
        console.log(`¡Encontré al Pokemon!`);
        console.log(`Nombre: ${pokemon.nombre}`);
        console.log(`Tipo: ${pokemon.tipo}`);
        console.log(`Ataque: ${pokemon.ataque}`);
        console.log(`Color: ${pokemon.color}`);

        // Se verifica si el campo evoluciones existe antes de intentar mostrarlo
        if (pokemon.evoluciones) {
            console.log(`Evoluciones: ${pokemon.evoluciones.join(', ')}`);
        } else {
            console.log('Evoluciones: No tiene evoluciones registradas.');
        }
    })
    .catch((error) => {
        console.log(error);
    });

// Ahora se llama a obtenerPokemon con los Pokemon que no están en la base de datos
obtenerPokemon('Eevee')
    .then((pokemon) => {
        console.log(`¡Encontré al Pokemon!`);
        console.log(`Nombre: ${pokemon.nombre}`);
        console.log(`Tipo: ${pokemon.tipo}`);
        console.log(`Ataque: ${pokemon.ataque}`);
        console.log(`Color: ${pokemon.color}`);
        console.log(`Evoluciones: ${pokemon.evoluciones.join(', ')}`);
    })
    .catch((error) => {
        console.log(error);
    });

obtenerPokemon('Vulpix')
    .then((pokemon) => {
        console.log(`¡Encontré al Pokemon!`);
        console.log(`Nombre: ${pokemon.nombre}`);
        console.log(`Tipo: ${pokemon.tipo}`);
        console.log(`Ataque: ${pokemon.ataque}`);
        console.log(`Color: ${pokemon.color}`);
        console.log(`Evoluciones: ${pokemon.evoluciones.join(', ')}`);
    })
    .catch((error) => {
        console.log(error);
    });