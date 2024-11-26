const obtenerPokemon = (nombrePokemon) => {
    return new Promise((resolve, reject) => {

        // Simular una solicitud asincrona de información de un pokemón
        const pokemonDatabase = {
            "pikachu": {
                nombre: "Pichu",
                tipo: "Eléctrico",
                ataque: "Impact Trueno",
                color: "Amarillo",
                evoluciones: ["Pikachu","Raichu"]
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
                evoluciones: ["Wartortle","Blastoise"]
            },
            "ditto": {
                nombre: "Ditto",
                tipo: "Normal",
                ataque: "Transformación",
                color: "Morado",
                evoluciones: "Sin evolución"
            
            },
            "chikorita": {
                nombre: "Chikorita",
                tipo: "Planta",
                ataque: "Espesura",
                color: "Verde",
                evoluciones: ["Bayleef", "Meganium"]
            },
        }

        // Comprobar si el pokemon existe en nuestra base de datos.
        const pokemon = pokemonDatabase[nombrePokemon.toLowerCase()];
        if (pokemon) {
            resolve(pokemon);
        } else {
            reject('Pokemon no encontrado :(, ¡¡Vamos a capturarlo!!!');
        }
    })
};

obtenerPokemon('Chikorita')  //Si existe
    .then((pokemonEncontrado) => {
        console.log('Si, encontré  al pokemon en la Pokedex');
        console.log(`Nombre: ${pokemonEncontrado.nombre}`);
        console.log(`Tipo: ${pokemonEncontrado.tipo}`);
        console.log(`Ataque:${pokemonEncontrado.ataque}`);
        console.log(`Color: ${pokemonEncontrado.color}`);
        console.log(`1er.Evolución: ${pokemonEncontrado.evoluciones}`);
        
    })
    .catch((error) => {
        console.log(error);
    });

    obtenerPokemon('Squirtle')  //Si existe
    .then((pokemonEncontrado) => {
        console.log('Si, encontré  al pokemon en la Pokedex');
        console.log(`Nombre: ${pokemonEncontrado.nombre}`);
        console.log(`Tipo: ${pokemonEncontrado.tipo}`);
        console.log(`Ataque:${pokemonEncontrado.ataque}`);
        console.log(`Color: ${pokemonEncontrado.color}`);
        console.log(`Evoluciones: ${pokemonEncontrado.evoluciones}`);
        
    })
    .catch((error) => {
        console.log(error);
    });

    obtenerPokemon('Ditto') // Si existe
    .then((pokemonEncontrado) => { 
        console.log('Si, encontré  al pokemon en la Pokedex');
        console.log(`Nombre: ${pokemonEncontrado.nombre}`);
        console.log(`Tipo: ${pokemonEncontrado.tipo}`);
        console.log(`Ataque:${pokemonEncontrado.ataque}`);
        console.log(`Color: ${pokemonEncontrado.color}`);
        console.log(`Evoluciones: ${pokemonEncontrado.evoluciones}`);
       
    })
    .catch((error) => {
        console.log(error);
    });

    obtenerPokemon('Venomoth') //No existe
    .then((pokemonEncontrado) => {
        console.log('Si, encontré  al pokemon en la Pokedex');
        console.log(`Nombre: ${pokemonEncontrado.nombre}`);
       
    })
    .catch((error) => {
        console.log(error);
    });
 
   

