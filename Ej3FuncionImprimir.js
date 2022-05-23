/*imprimirSimbolo, que imprima por consola n 
veces un caracter en la misma línea. Tanto n como el caracter se reciben como parámetro. */

let caracter = prompt("Ingrese un caracter: ")
let cantidad = parseInt(prompt("Ingrese cantidad de veces a imprimir el caracter: "))
imprimirSimbolo(caracter, cantidad);

function imprimirSimbolo(car, cant){
    for(i=0; i<cant; i++){
        console.log(car);
    }
}