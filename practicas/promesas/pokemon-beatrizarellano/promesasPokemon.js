// Base de datos de Pokemon Beatriz Arellano
const pokemonDatabase = {
    pikachu: {
      nombre: "Pikachu",
      tipo: "Electrico",
      ataque: "Impact Trueno",
      color: "Amarillo",
      evolucion: "Raichu"
    },
    bulbasaur: {
      nombre: "Bulbasaur",
      tipo: "Planta",
      ataque: "Latigo Cepa",
      color: "Verde",
      evolucion: "Ivysaur"
    },
    charmander: {
      nombre: "Charmander",
      tipo: "Fuego",
      ataque: "Lanza Llama",
      color: "Rojo",
      evolucion: "Charizard"
    },
    squirtle: {
      nombre: "Squirtle",
      tipo: "Agua",
      ataque: "Chorro de Agua",
      color: "Azul",
      evolucion: "Wartortle"
    }
  };
  
  // Definir las variables globalmente para cada Pokemon
  Object.keys(pokemonDatabase).forEach((key) => {
    window[key] = pokemonDatabase[key]; // Agregar cada Pokémon al objeto global "window"
  });
  
  // Ahora puedes acceder directamente a los Pokemon escribiendo su nombre en la consola directamente
  console.log(pikachu);
  console.log(charmander);
  console.log(squirtle);
  
  // Acceder a sus propiedades de cada Pokemon directamente
  console.log(charmander.nombre); 
  console.log(squirtle.ataque);   
  