/*obtenerResto, 
que devuelva el resto del cociente entre dos números enteros dados 
como parámetros (sin usar el operador %). */

let dividendo = parseInt(prompt("Ingrese el dividendo: "))
let divisor = parseInt(prompt("Ingrese el divisor: "))

obtenerResto(dividendo, divisor)

function obtenerResto(divid, divis){
    let division = Math.trunc(divid / divis);
    let resto = divid - (divis * division);
    console.log("El resto es: " + resto);
}