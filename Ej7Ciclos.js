/*Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que permita ingresar cant números reales, correspondientes a las estaturas de un equipo de jugadores de baloncesto (en metros). La computadora debe mostrar la estatura promedio. */
let prom;
let total =0;
let cant = parseInt(prompt("¿Cuántas estaturas vas a ingresar? "))
for(i=0; i<cant; i++){
    let est = parseFloat(prompt("Ingresá estatura " + i + ": "))
    total = total + est
}
console.log("El total de ventas es $ " + total/cant)