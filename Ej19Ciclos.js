/*Realizá un programa que permita la validación del ingreso a un sitio web. Teniendo ya precargados un nombre de usuario ("admin") y una contraseña ("123456"), el programa debe permitir al usuario ingresar sus credenciales. Si las mismas son erróneas, se volverán a pedir hasta un máximo de 3 intentos. Finalmente, la computadora debe mostrar alguno de los siguientes mensajes según sea el caso: "Acceso concedido" o "Se ha bloqueado la cuenta". */
let usuario = "admin";
let contrasena = "123456";
let contador = 1;
for(i=0; i<3;i++){
    let usu = prompt("Ingrese usuario: ")
    let cont = prompt("Ingrese contraseña: ")
    contador = contador + 1;
    if(usu === usuario && cont === contrasena){
        console.log("Acceso concedido")
        break
    }else{
        
        let usu = prompt("Ingrese usuario: ")
        let cont = prompt("Ingrese contraseña: ")
        if(usu === usuario && cont === contrasena){
            console.log("Acceso concedido")
            break
        }else{
            if (contador == 3){
                console.log("Se ha bloqueado su cuenta")
                break
            }
        }
        
    }
}