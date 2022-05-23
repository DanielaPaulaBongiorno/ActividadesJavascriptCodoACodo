/*Realizá un programa que permita al usuario ingresar 12 valores, de a uno por vez, que representan los sueldos mensuales que percibió un empleado durante un año. Si durante la carga de los sueldos mensuales se detecta un valor negativo, esto indica que aún no se ha cobrado el mes en curso, por lo tanto, deben dejar de ingresarse datos. La computadora debe mostrar el sueldo anual percibido (total o parcial). */
let sumaSueldo =0;
for(i=0; i<12;i++){
    let sueldo = parseFloat(prompt("Ingrese sueldo para el mes " + (i+1)))
    sumaSueldo = sumaSueldo + sueldo;
    if(sueldo<0){
        console.log("Sueldo anual: $ " + sumaSueldo)
        break
    }
}