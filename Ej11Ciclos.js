/*Realizá un programa que permita validar una nota de examen de la misma manera que el ejercicio anterior, pero con las siguientes nuevas directivas:
▪ La nota 0 se reserva para los ausentes.
▪ Las notas 1 y 3 no se suelen poner nunca.
En resumen, las notas válidas deberán ser el 2 y el rango comprendido entre el 4 y el 10. ( */

let nota = parseInt(prompt("Ingrese una nota: "))
if (nota !=2 && (nota < 4 || nota > 10)) {
    console.log("ERROR. Nota fuera de rango.")
}
while (nota === 2 || (nota >= 4 && nota <= 10)) {
    console.log(nota);
    break
}
