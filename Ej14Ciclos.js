/*Realizá un programa que permita al usuario ingresar personas (para cada una, nombre y edad). La carga termina cuando en el nombre de la persona se ingresa un asterisco ('*'). La computadora debe indicar cómo se llama la persona más joven. */

let nombre = prompt("Ingrese nombre: ")
let edad = parseInt(prompt("Ingrese la edad de " + nombre))
let auxEdad = 1111111;
let auxNombre;
while (nombre != "*"){
    if (edad < auxEdad){
        auxEdad = edad;
        auxNombre = nombre;
    }
    nombre = prompt("Ingrese nombre: ")
    if(nombre == "*"){
        console.log("La persona más joven es " + auxNombre + " (" + auxEdad + " años).")
        break
    }
    edad = parseInt(prompt("Ingrese la edad de " + nombre))
    if(nombre == "*"){
        console.log("La persona más joven es " + auxNombre + " (" + auxEdad + " años).")
        break
    }
}

