// Promises All

const promesa1 = new Promise((resolve) => setTimeout(resolve, 2000, 'Resultado Promesa 1'));
const promesa2 = new Promise((resolve) => setTimeout(resolve, 4000, 'Resultado Promesa 2'));
const promesa3 = new Promise((resolve) => setTimeout(resolve, 3000, 'Resultado Promesa 3'));

Promise.all([promesa1, promesa2, promesa3])
    .then((resultadoPromesas) => {
        console.log(resultadoPromesas);
    }).catch((error) => {
        console.log(error);
    })
