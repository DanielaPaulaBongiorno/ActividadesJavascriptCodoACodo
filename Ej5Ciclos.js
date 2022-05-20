/*Realizá un programa que permita al usuario ingresar 5 edades. La computadora debe indicar cuántas edades fueron valores impares mayores que 18. */

for(i=0; i<5;i++){
    let edad = parseInt(prompt("Ingrese la edad de la persona " + i+1 + ": "))
    if(edad%2 != 0 && edad>18){
        cont=cont+1
    }
}
console.log("La cantidad de edades mayores a 18 e impares fue de: " + cont)