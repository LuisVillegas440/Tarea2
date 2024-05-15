/*21. BOSQUEJO
Pedimos un numero0
Hacemos una condicion en la que si el numero es mayor que cero y menor o igual que 9
Decimos que es de un digito

 Solicitar al usuario un número y mostrar si es un número de un solo dígito.  */
const read = require("prompt-sync")();
const numero = read("Ingresar numero: ");
if (numero > 0 && numero <= 9) {
  console.log("El numero es de un solo digito");
}
