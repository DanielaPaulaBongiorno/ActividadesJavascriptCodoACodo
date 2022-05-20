/*Realizá un programa que permita al usuario ingresar un número entero n entre 1 y 10. La computadora debe mostrar la tabla de multiplicar de n. */

let num = parseInt(prompt("Ingresa un número: "))
console.log("Tabla del " + num)
for(i=0; i<=10; i++){
    console.log(num + "X" + i + "=" + num*i)
}