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
            },
            "jigglypuff": {
                nombre: "Jigglypuff",
                tipo: "Normal/Hada",
                ataque: "Canto",
                color: "Rosa"
            },
            "meowth": {
                nombre: "Meowth",
                tipo: "Normal",
                ataque: "Arañazo",
                color: "Beige"
            },
            "psyduck": {
                nombre: "Psyduck",
                tipo: "Agua",
                ataque: "Confusión",
                color: "Amarillo"
            }
        }

        // Comprobar si el pokemon existe en nuestra base de datos.
        const pokemon = pokemonDatabase[nombrePokemon.toLowerCase()];
        if (pokemon) {
            resolve(pokemon);
        } else {
            reject('No se encontro al pokemon ' + nombrePokemon + ', capturar en futuro!');
        }
    })
};

const obtenerEvoluciones = (nombrePokemon) => {
    return new Promise((resolve, reject) => {

        // Simular una solicitud asincrona de información de un pokemón
        const pokemonDatabase = {
            "pikachu": {
                evoluciones: "Pichu, Pikachu, Raichu y Raichu de Alola"
            },
            "bulbasaur": {
                evoluciones: "Bulbasaur, Ivysaur, Venusaur y Mega Venusaur"
            },
            "charmander": {
                evoluciones: "Charmander, Charmeleon, Charizard, Mega Charizard X, Mega Charizard Y y Charizard Gigamax"
            },
            "squirtle": {
                evoluciones: "squirtle, Wartortle, Blastoise, Mega Blastoise y Blastoise Gigamax"
            },
            "jigglypuff": {
                evoluciones: "Igglybuff, Jigglypuff, Wigglytuff"
            },
            "meowth": {
                evoluciones: "Meowth, Persian y Meowth de Galar"
            },
            "psyduck": {
                evoluciones: "Psyduck y Golduck"
            }
        }

        // Comprobar si el pokemon existe en nuestra base de datos.
        const pokemon = pokemonDatabase[nombrePokemon.toLowerCase()];
        if (pokemon) {
            resolve(pokemon);
        } else {
            reject('No se encontraron evoluciones del pokemon ' + nombrePokemon + ', registrarlas!');
        }
    })
};

const pokemon = 'jigglypuff';

obtenerPokemon(pokemon)
    .then((pokemonEncontrado) => {
        //quiero conocer la información de tipo, nombre, ataque y color
        console.log('El nombre es ' + pokemonEncontrado.nombre + '. El tipo es ' + pokemonEncontrado.tipo +  
            '. El ataque es ' + pokemonEncontrado.ataque + ' y su color es ' + pokemonEncontrado.color + '.'
        );
    })
    .catch((error) => {
        console.log(error);
    });

obtenerEvoluciones(pokemon)
    .then((pokemonEncontrado) => {
        console.log('Las evoluciones son: ' + pokemonEncontrado.evoluciones);
    })
    .catch((error) => {
        console.log(error);
    });


let pokemon2 = 'Gastly';

obtenerPokemon(pokemon2)
    .then((pokemonEncontrado) => {
        //quiero conocer la información de tipo, nombre, ataque y color
        console.log('El nombre es ' + pokemonEncontrado.nombre + '. El tipo es ' + pokemonEncontrado.tipo +  
            '. El ataque es ' + pokemonEncontrado.ataque + ' y su color es ' + pokemonEncontrado.color + '.'
        );
    })
    .catch((error) => {
        console.log(error);
    });

obtenerEvoluciones(pokemon2)
    .then((pokemonEncontrado) => {
        console.log('Las evoluciones son: ' + pokemonEncontrado.evoluciones);
    })
    .catch((error) => {
        console.log(error);
    });