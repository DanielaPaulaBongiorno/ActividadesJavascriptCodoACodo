/*Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe indicar si el mayor es divisible por el menor. */

var num1 = parseInt(prompt("Ingresa el primer número: "))
var num2 = parseInt(prompt("Ingresa el segundo número: "))
if (num1 > num2) {
    if (num1 % num2 == 0) {
        console.log("El número " + num1 + " es divisible por " + num2)
    } else {
        console.log("No es divisible")
    }
}
if (num2 > num1) {
    if (num2 % num1 == 0) {
        console.log("El número " + num2 + " es divisible por " + num1)
    } else {
        console.log("No es divisible")
    }
}else{
    console.log("Ambos números son iguales.")
}

