// Promice Race
// devolver una nueva promesa que se resuelve tan pronto como la primera de las promesas ya sea resuelva o sea rechazada.

const promesa1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Resultado Promesa 1'));
const promesa2 = new Promise((resolve) => setTimeout(resolve, 4000, 'Resultado Promesa 2'));

Promise.race([promesa1, promesa2])
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    });
