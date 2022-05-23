/*esPar, que devuelva si un número entero dado como parámetro es par o no. */

let numero = parseInt(prompt("Ingrese numero: "));
esPar(numero);

function esPar(num) {
    if (num%2 ==0){
        console.log("Número par.")
    }else{
        console.log("Número impar.")
    }
}