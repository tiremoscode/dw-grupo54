const obtenerPokemon = (nombrePokemon) => {
    return new Promise((resolve, reject) => {

        // Simular una solicitud asincrona de información de un pokemón
        const pokemonDatabase = {
            "pikachu": {
                nombre: "Pikachu",
                tipo: "Eléctrico",
                ataque: "Impact Trueno",
                color: "Amarillo"
            },
            "bulbasaur": {
                nombre: "Bulbasaur",
                tipo: "Planta",
                ataque: "Latigo Cepa",
                color: "Verde"
            },
            "charmander": {
                nombre: "Charmander",
                tipo: "Fuego",
                ataque: "Lanza llama",
                color: "Rojo"
            },
            "squirtle": {
                nombre: "Squirtle",
                tipo: "Agua",
                ataque: "Chorro de Agua",
                color: "Azul"
            }
        }

        // Comprobar si el pokemon existe en nuestra base de datos.
        const pokemon = pokemonDatabase[nombrePokemon.toLowerCase()];
        if (pokemon) {
            resolve('El pokemon si existe en la pokedex');
        } else {
            reject('No se encontro ese pokemon, capturar en futuro!');
        }
    })
};

obtenerPokemon('Pikachu')
    .then((pokemonEncontrado) => {
        console.log('Si lo encontre');
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
