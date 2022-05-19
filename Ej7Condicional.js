/*Realizá un programa que permita al usuario ingresar tres números. La computadora debe mostrarlos ordenados de menor a mayor. */
var num1 = parseInt(prompt("Ingresa el primer número: "))
var num2 = parseInt(prompt("Ingresa el segundo número: "))
var num3 = parseInt(prompt("Ingresa el tercer número: "))
if (num1 < num2 && num1 < num3 && num2 < num3) {
    console.log(num1, num2, num3)

} else {
    if (num1 < num2 && num1 < num3 && num2 > num3) {
        console.log(num1, num3, num2)

    } else {
        if (num1 > num2 && num1 < num3 && num2 < num3) {
            console.log(num2, num1, num3)
        } else {
            if (num1 < num2 && num1 > num3 && num2 > num3) {
                console.log(num3, num1, num2)
            } else {
                if (num1 > num2 && num1 > num3 && num2 < num3) {
                    console.log(num2, num3, num1)
                } else {
                    if (num1 > num2 && num1 > num3 && num2 > num3) {
                        console.log(num3, num2, num1)
                    }
                }
            }

        }
    }
}
