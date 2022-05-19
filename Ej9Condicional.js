/*Realizá un programa que permita al usuario ingresar los lados a, b y c de un triángulo. La computadora informa si el triángulo es o no válido4. En caso afirmativo, además informa si es equilátero, isósceles o escaleno. */

var a = parseInt(prompt("Ingresa el lado a: "))
var b = parseInt(prompt("Ingresa el lado b: "))
var c = parseInt(prompt("Ingresa el lado c: "))
if ((a+b) < c){
    console.log("El triángulo es válido")
    if (a==b && b==c && a==c){
        console.log("Es equilátero")
    }else{
        if(a==b || b==c || a==c){
            console.log("Es isósceles")
        }else{
            console.log("Es escaleno")
        }
    }
}else{
    console.log("No es triángulo")
}

