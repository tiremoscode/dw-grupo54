## Aplicación para Generar el RFC

- Sincronizar desde la rama main y crear una nueva rama con tu nombre acompañado del ejercicio. Ejemplo: feature/tairi-rfc
- Tomar como referencia lo que hicimos en los ejercicios de calculadora, descuento y crearemos una carpeta dentro de la carpeta prácticas/rfc con nuestro nombre. Ejemplo: rfc-tairi
Crear el archivo con tu nombre. Ejemplo rfctairi.js y rfctairi.html
- Crear una aplicación que solicite al Usuario desde la pagina web los siguientes datos: a) Nombre(s) b) Apellido Paterno c) Apellido Materno d) Dia de Nacimiento (2 digitos) e) Mes de Nacimiento (2 digitos) f) Año de Nacimiento (2 digitos)
- Utilizando las siguientes reglas, crearemos el RFC del Usuario. Ejemplo: TAIRI MAYRI PÉREZ MILLAN. Fecha de nacimiento: 24/ENERO/1995. RFC: PEMT950124XXX 
- a) Se toman las primeras 2 letras del Apellido Paterno.
- b) Se toma la primer letra del Apellido Materno. 
- c) Se toma la primer letra del Nombre. 
- d) Concatenamos ambos valores y añadimos los digitos del año, mes y día
- e) Por último, añadimos la homoclave con un valor fijo XXX.

- Cuando la termines, mandas tu Pull Request.