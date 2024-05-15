/* 20.BOSQUEJO
Pedimos un numero
Verificamos si es mayor que 0 y menor o igual que 100
SI cumple decimos que el numero es mayor que cero y menor o igual que 100

 Pedir al usuario un número y mostrar si es mayor 0 y menor o igual a 100.  */
const read = require("prompt-sync")();
const numero = read("Ingresar numero: ");
if (numero > 0 && numero <= 100) {
  console.log("El numero si mayor que cero y menor o igual que 100");
}
