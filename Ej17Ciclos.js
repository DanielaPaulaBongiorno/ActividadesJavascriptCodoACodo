/*Realizá un programa que permita al usuario ingresar la cantidad de cierto artículo y el precio unitario de dicho artículo. Por cada carga debe preguntar si se desea seguir ingresando de la forma "¿Deseás ingresar otro artículo? [S/N]". La carga de datos finaliza cuando se detecta una 'n' o 'N'. Reutilizá el algoritmo realizado en el ejercicio 37) para validar la opción ingresada. La computadora debe mostrar el monto total del ticket. */
let suma = 0;
let cant = parseInt(prompt("Ingrese cantidad de artículo x: "));
let precio = parseFloat(prompt("Ingrese precio unitario de ese artículo x: "));
let opcion = prompt("¿Deseas ingresar otro artículo? [S/N] ");
while (opcion != "n" && opcion != "N") {
    suma = suma + (cant * precio);
    cant = parseInt(prompt("Ingrese cantidad de artículo x: "));
    precio = parseFloat(prompt("Ingrese precio unitario de ese artículo x: "))
    opcion = prompt("¿Deseas ingresar otro artículo? [S/N] ");
}
console.log("El ticket da un total de $ " + suma);