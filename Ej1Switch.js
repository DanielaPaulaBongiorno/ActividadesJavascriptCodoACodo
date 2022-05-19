/*Realizá un programa que permita al usuario ingresar un número entero entre 1 y 12. La computadora debe mostrar por pantalla el nombre del mes del año que representa tal número. Si se ingresa un número fuera de rango, debe mostrar un error.*/

var num = parseInt(prompt("Ingresa un número entre 1 y 12: "))
if (num >= 1 && num <= 12) {

    switch (num) {
        case 1:
            console.log("ENERO")
            break
        case 2:
            console.log("FEBRERO")
            break
        case 3:
            console.log("MARZO")
            break
        case 4:
            console.log("ABRIL")
            break
        case 5:
            console.log("MAYO")
            break
        case 6:
            console.log("JUNIO")
            break
        case 7:
            console.log("JULIO")
            break
        case 8:
            console.log("AGOSTO")
            break
        case 9:
            console.log("SEPTIEMBRE")
            break
        case 10:
            console.log("OCTUBRE")
            break
        case 11:
            console.log("NOVIEMBRE")
            break
        case 12:
            console.log("DICIEMBRE")
            break
    }
}else{
    console.log("Opción incorrecta!")
}