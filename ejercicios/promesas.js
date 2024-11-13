// ¿Qué promesas hicimos?
// Aprender HTML5, CSS3, JavaScript?
// Certificación AWS
// La promesa de un regalo si suman puntos.
// Aprendizaje del programa
// Resolver todas nuestras dudas.

// Que es sincrono
// Es una actividad que se ejecuta de manera secuencial.

// que es asincrono
// Son actividades que se ejecutan de manera independiente.

// Definición Prpmesa
// Es un objeto que va a representar una posible finalización exitosa o fallo de una operación asincrona y el valor que este resulte.

// 3 estados posibles.
// PENDING (Pendiente). El estado inicial.
// FULFILLED (Cumplida). La operación se completo con éxito.
// REJECTED (Rechazado). LA operación fallo y entonces informamos cual fue el motivo por el que falló

// Estrcutrua basiica de una promesa.

const miPrimerPromesa = new Promise((resolve, reject) => {

    const resultadoConexionExitosa = false; // Simular que fue exitoso.

    if (resultadoConexionExitosa) {
        resolve('Conexión exitosa');
    } else {
        reject('Error en la conexión');
    }

});

miPrimerPromesa
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('La operación ha finalizado');
    });