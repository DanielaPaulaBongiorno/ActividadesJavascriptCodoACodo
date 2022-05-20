/*Realizá un programa que permita al usuario ingresar un número natural. La computadora debe mostrar el factorial del número. */
let fact=1;
let num = parseInt(prompt("Ingrese el número para calcular el factorial: "))
for(i=0; i<num; i++){
    fact = fact* (num-i)
}
console.log(num + "!: " + fact)