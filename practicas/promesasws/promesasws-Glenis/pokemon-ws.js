async function obtenerPokemones() {
    try {
        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=6");
        const datos = await respuesta.json();
        
        const columnas = document.querySelectorAll('.col-6 .row .col-12');

        for (let i = 0; i < datos.results.length; i++) {
            const respuestaPokemon = await fetch(datos.results[i].url);
            const pokemon = await respuestaPokemon.json();
            
            const columna = columnas[i];
            columna.innerHTML += `
                <div class="tarjeta">
                    <img class="pokemon-img" style="width: 100px;" src="${pokemon.sprites.front_default}">
                    <div class="cuerpo-tarjeta">
                        <h5 class="pokemon-nombre">${pokemon.name}</h5>
                        <p class="pokemon-altura">Altura: ${pokemon.height * 10} cm</p>
                        <p class="pokemon-peso">Peso: ${pokemon.weight / 10 } kg</p>
                        <p class="pokemon-tipo">Tipo: ${pokemon.types[0].type.name}</p>
                    </div>
                </div>
            `;
        }
    } catch (error) {
        console.error('Hubo un error:', error);
    }
}
obtenerPokemones();