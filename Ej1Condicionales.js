/*Realizá un programa que permita al usuario ingresar un número entero. La computadora debe indicar si se trata de un número par o impar.*/

var num = parseInt(prompt ("Ingresa un número: "))
if (num%2 ==0){
    console.log("El número " + num + " es par." )
}else{
    console.log("El número " + num + " es impar." )
}