/*Realizá un programa que permita al usuario ingresar una letra, correspondiente a un dígito del sistema de numeración romano. La computadora debe mostrar su correspondiente valor decimal. Si se ingresa una letra inexistente, la computadora debe informar que no existe tal dígito. */

var num = prompt("Ingresa un número romano (use mayúsculas): ")

switch (num) {
    case "I":
        console.log("1")
        break
    case "X":
        console.log("10")
        break
    case "L":
        console.log("50")
        break
    case "C":
        console.log("100")
        break
    case "M":
        console.log("1000")
        break
    case "V":
        console.log("5")
        break
    case "D":
        console.log("500")
        break
    default:
        console.log("Ha introducido número romano incorrecto.")
}
