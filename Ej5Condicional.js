/*Realizá un programa que permita al usuario ingresar su edad (entre 1 y 120 años) y su género ('F' para mujeres, 'M' para hombres). La computadora debe indicar si la persona está en edad de jubilarse. En caso de haber ingresado valores erróneos (edad fuera de rango o género inválido), informar tal situación.*/

var edad = parseInt(prompt("Ingresa su edad: "))
var genero = (prompt("Ingresa género F o M: "))
if ((edad >= 60 && edad <121) && (genero == "F" || genero == "f")) {
    console.log("Estás en edad de jubilarte.")
} else {
    if ((edad >= 65 && edad <121) && (genero == "M" || genero == "m")) {
        console.log("Estás en edad de jubilarte.")
    } else {
        if ((edad >= 1 && edad < 60) && (genero == "F" || genero == "f")) {
            console.log("No estás en edad de jubilarte.")
        } else {
            
                if((edad >= 1 && edad < 65) && (genero == "M" || genero == "m")) {
                console.log("No estás en edad de jubilarte.")
                } 
                else {
                    if(edad <1 || edad >120 || genero !="F" || genero!="f" || genero !="M" || genero !="m"){
                        console.log("Edad fuera de rango o género inválido")
                    }
                }
            }
    }
}

