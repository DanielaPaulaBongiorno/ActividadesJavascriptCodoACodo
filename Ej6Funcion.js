/*esMultiplo, que devuelva si un número entero es múltiplo de otro. Ambos son dados como parámetros. */

let num1 = parseInt(prompt("Ingrese primer número: "))
let num2 = parseInt(prompt("Ingrese segundo número: "))

esMultiplo(num1, num2);

function esMultiplo(a, b){
    if(a%b ==0 || b%a ==0){
        console.log(a + " es múltiplo de " + b);
    }else{
        console.log(a + " no es múltiplo de " + b)
    }
}