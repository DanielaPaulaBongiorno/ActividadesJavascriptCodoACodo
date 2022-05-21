/*Realizá un programa que permita al usuario ingresar números hasta que se introduzca un 0. La computadora debe mostrar el número máximo y el número mínimo. */

let num = parseInt(prompt("Ingrese un número: (0 para cortar) "))
let max = -111111;
let min = 1111111;
while (num != 0) {
    if (num > max) {
        max = num;
    }
    if (num < min) {

        min = num;
    }

    num = parseInt(prompt("Ingrese un número: (0 para cortar) "))
}
console.log("El mínimo fue " + min + " y el máximo " + max)