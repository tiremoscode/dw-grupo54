function searchPokemon() {
    const name = document.getElementById('pokemonName').value.toLowerCase();
    const infoDiv = document.getElementById('pokemonInfo');
    infoDiv.innerHTML = ''; // Limpiar la información anterior

    // Validar si el Pokémon existe en la base de datos
    if (window[name]) {
        const pokemon = window[name];

        // Construir las características del Pokémon
        const pokemonHTML = `
            <div class="pokemon-info">
                <h2>${pokemon.nombre}</h2>
                <p><strong>Tipo:</strong> ${pokemon.tipo}</p>
                <p><strong>Ataque:</strong> ${pokemon.ataque}</p>
                <p><strong>Color:</strong> ${pokemon.color}</p>
                <p><strong>Evolución:</strong> ${pokemon.evolucion}</p>
            </div>
        `;

        // Mostrar las características en el contenedor
        infoDiv.innerHTML = pokemonHTML;
    } else {
        infoDiv.innerHTML = `<p style="color: red;">Pokémon no encontrado. Intenta con otro nombre.</p>`;
    }
}
