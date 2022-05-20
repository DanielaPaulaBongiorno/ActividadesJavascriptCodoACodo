/*Realizá un programa que permita al usuario ingresar dos números enteros num1 y num2, donde el primero siempre deberá ser menor o igual al segundo. La computadora debe mostrar la secuencia de números existentes entre ambos: (Ver ejemplo)
A) Incluyéndolos;
B) Excluyéndolos. */

let num1 = parseInt(prompt("Ingresa primer número: "))
let num2 = parseInt(prompt("Ingresa segundo número: "))
if (num1 < num2) {
    console.log("Forma inclusiva.")
    for (i = num1; i <= num2; i++) {
        console.log(i)
    }
    console.log("Forma exclusiva.")
    for (i = num1-1; i < num2; i++) {
        console.log(i)
    }
}