/*esVocal, que devuelva si un caracter dado como parámetro es o 
no una letra vocal (contemplar mayúsculas y minúsculas). */

let caracter = prompt("Ingrese un caracter: ");
esVocal(caracter);

function esVocal(car){
    if (car == "a" || car == "e" || car == "i" || car == "o" || car == "u" || car == "A" || car == "E" || car == "I" || car == "O" || car == "U"){
        
        console.log("Es una vocal.")
    }else{
        console.log("No es una vocal.")
    }
}
