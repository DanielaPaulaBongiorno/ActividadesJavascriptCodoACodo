/*Realizá un programa que permita al usuario ingresar un número natural n. La computadora debe mostrar los primeros n múltiplos de 3 excepto aquellos que sean a la vez múltiplos de 5. */

let num = parseInt(prompt("Ingresa cuántos números múltiplos de 3 pero no de 5, quiere mostrar: "))
let x =0;
for(i=0; i<num ;i++){
    x=x+3;
    if (x%5 != 0){
        console.log(x)
    }
}
