const tarea1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Tarea 1 completada'), 5000);
});

const tarea2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Tarea 2 completada'), 5000);
});

// Encadenar promesas.

tarea1
    .then((resultadoTarea1) => {
        console.log(resultadoTarea1);
        return tarea2;
    })
    .then((resultadoTarea2) => {
        console.log(resultadoTarea2);
    })
    .catch((error) => {
        console.log(error);
    });