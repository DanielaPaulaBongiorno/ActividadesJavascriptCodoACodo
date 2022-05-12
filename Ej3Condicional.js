/*Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe indicar cuál de ellos es el mayor.*/

var num1 = parseInt(prompt ("Ingresa el primer número: "))
var num2 = parseInt(prompt ("Ingresa el segundo número: "))
if (num1 > num2){
    console.log("El mayor es " + num1)
}else{
    if(num1 <num2){
        console.log("El mayor es " + num2)
    }else{
        console.log("Ambos números son iguales")
    }
}