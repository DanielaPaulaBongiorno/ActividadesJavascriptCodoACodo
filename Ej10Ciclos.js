/*Realizá un programa que permita validar una nota de examen. Se espera que la nota que el usuario ingrese sea un número comprendido entre 0 y 10. La misma debe ser tantas veces ingresada como sean necesarias hasta que quede comprendida dentro del rango descripto. */

let nota = parseInt(prompt("Ingrese una nota: "))
while (nota >=0) {
    if (nota >= 0 && nota <= 10) {
        console.log(nota);  
        break 
    }else{
        console.log("ERROR. Nota fuera de rango.")
        nota = parseInt(prompt("Ingrese una nota: "))
    }
    nota = parseInt(prompt("Ingrese una nota: "))
}