//MENSAJE DE BIENVENIDA
alert("Bienvenido a Banca en Línea")

//CREACION DE USUARIOS
function cliente(id, contraseña, nombre, saldo) {
    this.id = id;
    this.contraseña = contraseña;
    this.nombre = nombre;
    this.saldo = saldo;

}



let Cliente1 = new cliente("19175373-9", "admin", "Giovany Oliva", 10000);
let Cliente2= new cliente("19775373-7", "admin1", "Giovany Olive", 100500);
let Cliente3 = new cliente("19185373-5", "admin2", "Giovany Olivi", 109000);

let clientes = [Cliente1, Cliente2, Cliente3];

let condicion=true;

let clienteActual;

while (condicion!=false){
    
    let id = prompt("Ingrese su id: ");
    let contraseña = prompt("Ingrese su contraseña:");

    for (let i=0; i<clientes.length; i++){
        if (id == clientes[i].id){
            if (contraseña == clientes[i].contraseña){

                alert("Bienvenido " + clientes[i].nombre)
                clienteActual = clientes[i];
                condicion=false;   
                break;
            } 
            }
            
        }
    if (condicion==true){
        alert("Usuario inexistente o contraseña incorrecta, ingrese nuevamente");
    }

}

while (condicion==false){
    let valido = false;
    while (valido!=true){   
        let opcion = parseInt(prompt("Ingrese que desea hacer:\n 1.-Ver saldo\n 2.-Realizar giro\n 3.-Realizar deposito\n 4.-Salir"))

        if (opcion == 1 || opcion == 2 || opcion == 3 || opcion == 4){
            switch (opcion) {
                case 1:
                    alert("Su saldo actual es: "+ clienteActual.saldo);
                    break;
                case 2:
                    let giro = parseInt(prompt("Su saldo actual es: "+ clienteActual.saldo+"\nIngrese monto que desea girar: "));
                    if (giro > clienteActual.saldo){
                        alert("No tienes suficiente saldo para realizar giro");
                    } else{
                        clienteActual.saldo = clienteActual.saldo - giro;
                        alert("Giro realizado. Su nuevo saldo es: "+clienteActual.saldo);
                    }
                    break;
                case 3:
                    let deposito = parseInt(prompt("Su saldo actual es: "+ clienteActual.saldo+"\nIngrese monto que desea depositar: "));
                    clienteActual.saldo = clienteActual.saldo + deposito;
                    alert("Deposito realizado. Su nuevo saldo es: "+clienteActual.saldo);
                    break;

                case 4:
                    alert("Hasta luego");
                    valido = true;
                    condicion= true;
                    break;
            }
        }
        else{
            alert("Opcion no valida, ingrese nuevamente");
            valido=true;
        }
    }
}