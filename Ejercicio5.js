var a = parseInt(prompt("Ingrese valor de a: "))
var b = parseInt(prompt("Ingrese valor de b: "))
console.log("El valor de a es: " + a + ". El valor de b es: " + b)
var c = a; 
a = b; 
b = c;
console.log("Ahora el valor de a es: " + a + ". Y el valor de b es: " + b)

