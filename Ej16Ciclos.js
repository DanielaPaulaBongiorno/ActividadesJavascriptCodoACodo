/*Realizá un programa que permita al usuario ingresar números enteros. Por cada carga debe preguntar si se desea seguir ingresando, de la forma "¿Deseás ingresar otro número? [S/N]". La carga de datos finaliza cuando se detecta una 'n' o 'N'. Reutilizá el algoritmo realizado en el ejercicio 37) para validar la opción ingresada. La computadora debe mostrar el porcentaje de números pares ingresados. */

let num = parseInt(prompt("Ingrese un número: "));
let opcion = prompt("¿Deseas continuar? [S/N] ");
let cont = 0;
let cont1 = 0;
while (opcion != "n" && opcion != "N") {
    cont = cont + 1;
    if (num % 2 == 0) {
        cont1 = cont1 + 1;
    }
    num = parseInt(prompt("Ingrese un número: "));
    opcion = prompt("¿Deseas continuar? [S/N] ");
}
porcentaje = (cont1 * 100) / cont

