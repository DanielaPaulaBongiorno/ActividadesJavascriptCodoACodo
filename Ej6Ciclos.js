/*Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que permita ingresar cant números reales, correspondientes a las ventas realizadas por cierto vendedor. La computadora debe mostrar el total de las ventas. */
let total=0
let cant = parseInt(prompt("¿Cuántas ventas vas a ingresar? "))
for(i=0; i<cant; i++){
    let cant2 = parseFloat(prompt("Ingresá venta " + i + ": "))
    total = total + cant2
}
console.log("El total de ventas es $ " + total)