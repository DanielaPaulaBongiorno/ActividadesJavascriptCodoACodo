/*mostrarSucesion, que imprima por consola la sucesión de números 
inclusiva entre a y b, dados como parámetros. */
let num1 = parseInt(prompt("Ingrese primer número: "))
let num2 = parseInt(prompt("Ingrese segundo número: "))
mostrarSucesion(num1, num2);

function mostrarSucesion(a, b){
    for(i=a; i<=b; i++){
        console.log(i)
    }
}