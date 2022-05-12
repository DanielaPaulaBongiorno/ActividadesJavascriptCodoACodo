/*Realizá un programa que permita al usuario ingresar tres números enteros. La computadora debe indicar cuál de ellos es el mayor.*/

var num1 = parseInt(prompt("Ingresa el primer número: "))
var num2 = parseInt(prompt("Ingresa el segundo número: "))
var num3 = parseInt(prompt("Ingresa el tercer número: "))
if (num1 > num2 && num1 > num3) {
    console.log("El mayor es " + num1)
} else {
    if (((num1 > num2 || num1 < num2) && num2 < num3)) {
        console.log("El mayor es " + num3)
    } else {
        console.log("El mayor es " + num2)
    }
}

