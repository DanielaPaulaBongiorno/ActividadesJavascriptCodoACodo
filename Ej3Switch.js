/*Realizá un programa que permita al usuario ingresar el día y el mes de su cumpleaños (de manera independiente). La computadora debe indicar cuál es su signo del zodiaco. Deben validarse tanto el día como el mes. */

var dia = parseInt(prompt("Ingresa el día de su cumpleaños: "))
var mes = parseInt(prompt("Ingresa el mes de su cumpleaños: "))
if(dia>=1 && dia <=31){
switch (mes){
    case 1:
        if (dia>=20){
            console.log("Ud es de Acuario.")
        }else{
            console.log("Ud es de Capricornio.")
        }
    break

    case 2:
        if (dia>=19){
            console.log("Ud es de Piscis.")
        }else{
            console.log("Ud es de Acuario.")
        }
    break

    case 3:
        if (dia>20){
            console.log("Ud es de Aries.")
        }else{
            console.log("Ud es de Piscis.")
        }
    break

    case 4:
        if (dia>=20){
            console.log("Ud es de Tauro.")
        }else{
            console.log("Ud es de Aries.")
        }
    break

    case 5:
        if (dia>=21){
            console.log("Ud es de Géminis.")
        }else{
            console.log("Ud es de Tauro.")
        }
    break

    case 6:
        if (dia>=21){
            console.log("Ud es de Cáncer.")
        }else{
            console.log("Ud es de Géminis.")
        }
    break

    case 7:
        if (dia>=23){
            console.log("Ud es de Leo.")
        }else{
            console.log("Ud es de Cáncer.")
        }
    break

    case 8:
        if (dia>=23){
            console.log("Ud es de Virgo.")
        }else{
            console.log("Ud es de Leo.")
        }
    break

    case 9:
        if (dia>=23){
            console.log("Ud es de Libra.")
        }else{
            console.log("Ud es de Virgo.")
        }
    break

    case 10:
        if (dia>=23){
            console.log("Ud es de Escorpio.")
        }else{
            console.log("Ud es de Libra.")
        }
    break

    case 11:
        if (dia>=22){
            console.log("Ud es de Sagitario.")
        }else{
            console.log("Ud es de Escorpio.")
        }
    break

    case 12:
        if (dia>=22){
            console.log("Ud es de Capricornio.")
        }else{
            console.log("Ud es de Sagitario.")
        }
    break

    default:
        console.log("Ha introducido mes incorrecto")
}
}else{
    console.log("Ha introducido dia incorrecto.")
}