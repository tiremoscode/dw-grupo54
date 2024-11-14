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
        }

        // Comprobar si el pokemon existe en nuestra base de datos.
        const pokemon = pokemonDatabase[nombrePokemon.toLowerCase()];
        if (pokemon) {
            resolve(pokemon);
        } else {
            reject('No se encontro ese pokemon, capturar en el futuro!');
        }
    })
};

obtenerPokemon('Squirtle')
    .then((pokemonEncontrado) => {
        console.log('Si lo encontre');
        console.log('Nombre', pokemonEncontrado.nombre);
        console.log('Tipo:', pokemonEncontrado.tipo);
        console.log('Ataque:', pokemonEncontrado.ataque);
        console.log('Color:', pokemonEncontrado.color);
        console.log('Evoluciones:', pokemonEncontrado.evoluciones.join(", "));
    })
    .catch((error) => {
        console.log(error);
    });


obtenerPokemon('Eevee')
    .then((pokemonEncontrado) => {
        console.log('Si lo encontre');
    })
    .catch((error) => {
        console.log(error);
    });

obtenerPokemon('Beedrill')
    .then((pokemonEncontrado) => {
        console.log('Si lo encontre');
    })
    .catch((error) => {
        console.log(error);
    });

obtenerPokemon('Audino')
    .then((pokemonEncontrado) => {
        console.log('Si lo encontre');
    })
    .catch((error) => {
        console.log(error);
    });
