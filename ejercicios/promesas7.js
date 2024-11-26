function obtenerAPIRickAndMorty() {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
        .then(respuesta => respuesta.json()) // convierte la respuesta en un objeto JSON.
        .then(data => {
            console.log('success - comunicación exitosa');
            // console.log(data);

            // Como obtengo los personajes de Rick and Morty
            // ¿Cómo saber cuantos personajes hay en los resultados? Sin necesidad de recorrerlos.
            // como podría acceder a conocer el nombre y el status de un personaje de Rick and Morty?

            // Guadalupe
            // con un for, accediendo a la propiedad data.results (De acuerdo Rebeca, andrea sofia, karla)
            // Karla con un arreglo y un for, Guadalupe dice que no es necesario declarar un arreglo, con la
            // propiedad results.length. Glenis dice data.results.length y Guadalupe lo que dijo Glenis x2
            // accedidno a una propiedad a través de un for each  a las propiedades name y status

            const cuantosHay = data.results.length;
            console.log(cuantosHay);
            for (let i = 0; i < cuantosHay; i++) {
                // console.log(data.results[i]);
                console.log('Nombre ' + data.results[i].name + ' Status: ' + data.results[i].status);
            }

        })
        .catch(error => {
            console.log('Hubo un error ', error);
        });
}

obtenerAPIRickAndMorty();