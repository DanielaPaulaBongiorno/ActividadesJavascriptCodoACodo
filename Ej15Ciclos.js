/*Realizá un programa que permita al usuario ingresar números mientras el promedio entre todos los ingresados sea menor a 20. La computadora debe indicar la cantidad de valores leídos. */

let num = parseInt(prompt("Ingrese un número: "));
let prom = 0;
let suma=0;
let cont =0;
while (prom<=20){
    suma = suma + num;
    cont = cont + 1;
    prom = suma/cont
    console.log("Promedio actual: " + prom)
    num = parseInt(prompt("Ingrese un número: "));
}
console.log("Se leyeron " + cont + " valores.")