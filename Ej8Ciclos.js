/*Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que permita ingresar cant números enteros. La computadora debe mostrar cuál fue el mayor número y en qué posición apareció. */
let cant = parseInt(prompt("¿Cuántas números vas a ingresar? "))
let aux= -1111111111;
for(i=0; i<cant; i++){
    let num = parseInt(prompt("Ingresá el " + i+1 + " ° número: " ))
    if( num> aux){
        aux = num;
        pos = i+1;
    }
}
console.log("El número más grande fue el " + aux)
console.log("Apareció en la " + pos + " ° posición")