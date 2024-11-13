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
            resolve(pokemon.evoluciones);
        } else {
            reject('No se encontraron evoluciones del pokemon ' + nombrePokemon + ', registrarlas!');
        }
    })
};

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
            resolve(pokemon);
        } else {
            reject('No se encontro al pokemon ' + nombrePokemon + ', capturar en futuro!');
        }
    })
};

obtenerPokemon('pikachu')
    .then((pokemonEncontrado) => {
        return obtenerEvoluciones(pokemonEncontrado.nombre).then((evolucionesEncontradas) => {
            pokemonEncontrado['evoluciones'] = evolucionesEncontradas
            return pokemonEncontrado;
        })
    }).then((pokemonCompleto) =>{
        console.log('El nombre es ' + pokemonCompleto.nombre + '. El tipo es ' + pokemonCompleto.tipo +  
            '. El ataque es ' + pokemonCompleto.ataque + ' y su color es ' + pokemonCompleto.color + '. Las evoluciones son ' + pokemonCompleto.evoluciones
        );
    })
    .catch((error) => {
        console.log(error);
    });

    obtenerPokemon('Gastly')
    .then((pokemonEncontrado) => {
        return obtenerEvoluciones(pokemonEncontrado.nombre).then((evolucionesEncontradas) => {
            pokemonEncontrado['evoluciones'] = evolucionesEncontradas
            return pokemonEncontrado;
        })
    }).then((pokemonCompleto) =>{
        console.log('El nombre es ' + pokemonCompleto.nombre + '. El tipo es ' + pokemonCompleto.tipo +  
            '. El ataque es ' + pokemonCompleto.ataque + ' y su color es ' + pokemonCompleto.color + '. Las evoluciones son ' + pokemonCompleto.evoluciones
        );
    })
    .catch((error) => {
        console.log(error);
    });