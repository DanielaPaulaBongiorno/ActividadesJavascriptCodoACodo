/*Realizá un programa que permita al usuario ingresar la cantidad de inscriptos a una conferencia y la cantidad de asientos disponibles el auditorio. La computadora debe indicar si alcanzan los asientos, en caso contrario, indicar cuántos faltan para que todos los inscriptos puedan sentarse*/

var insc = parseInt(prompt ("¿Cuántos inscriptos hay?"))
var asientos = parseInt(prompt ("¿Cuántos asientos hay disponibles?"))
var total = asientos - insc
if (total >=0){
    console.log("Alcanzan los asientos.")
}else{
    console.log("No alcanzan los asientos.")
}
