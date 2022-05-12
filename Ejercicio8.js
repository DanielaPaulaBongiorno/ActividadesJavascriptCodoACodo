var num1 = parseInt(prompt ("Ingrese un número entero: "))
var num2 = parseInt(prompt ("Ingrese otro número entero: "))
parseInt(console.log (num1 + " + " + num2 + " => " + (num1 + num2)))
parseInt(console.log (num1 + " - " + num2 + " => " + (num1 - num2)))
parseInt(console.log (num1 + " * " + num2 + " => "  + (num1 * num2)))
if (num2>0){
    parseInt(console.log (num1 + " / " + num2 + " => "  + (num1 / num2)))
}else{
    console.log("La división por cero no existe!")
}
