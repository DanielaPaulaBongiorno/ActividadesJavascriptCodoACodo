/*Realizá un programa que permita al usuario ingresar la edad y el sueldo de cierto empleado. La computadora muestra el monto del aporte al sindicato que se debe descontar del salario del empleado, según cuadro.
Además, si la persona tiene 30 años o menos, se cobra un 30% adicional del valor del aporte.
*/
var edad = parseInt(prompt("Ingresa su edad: "))
var sueldo = parseFloat(prompt("Ingresa tu sueldo: "))
if (sueldo < 20000 && edad>30) {
    var aporte = sueldo * 0.7 / 100
    console.log("El valor del aporte es de: $ " + aporte)
} else {
    if (sueldo >= 20000 && sueldo <= 29999 && edad>30) {
        var aporte = sueldo * 1.4 / 100
        console.log("El valor del aporte es de: $ " + aporte)
    } else {
        if (sueldo >= 30000 && sueldo < 39999 && edad>30) {
            var aporte = sueldo * 2.1 / 100
            console.log("El valor del aporte es de: $ " + aporte)
        } else {
            if (sueldo >= 40000 && edad>30) {
                var aporte = sueldo * 2.8 / 100
                console.log("El valor del aporte es de: $ " + aporte)
            }
        }
    }
}
if (sueldo < 20000 && edad<=30) {
    var aporte = (sueldo * 0.7 / 100) 
    var aporteTot = aporte + (aporte*0.3)
    console.log("El valor del aporte es de: $ " + aporteTot)
} else {
    if (sueldo >= 20000 && sueldo <= 29999 && edad<=30) {
        var aporte = sueldo * 1.4 / 100 
        var aporteTot = aporte + (aporte*0.3)
        console.log("El valor del aporte es de: $ " + aporteTot)
    } else {
        if (sueldo >= 30000 && sueldo < 39999 && edad<=30) {
            var aporte = sueldo * 2.1 / 100 
            var aporteTot = aporte + (aporte*0.3)
            console.log("El valor del aporte es de: $ " + aporteTot)   
        } else {
            if (sueldo >= 40000 && edad<=30) {
                var aporte = sueldo * 2.8 / 100
                var aporteTot = aporte + (aporte*0.3)
                console.log("El valor del aporte es de: $ " + aporteTot)
            }
        }
    }
}