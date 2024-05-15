/* 11.BOSQUEJO
Pedimos un numero
 Pedir al usuario un número y mostrar si es mayor o menor que 10 */
const read = require("prompt-sync")();
const numero = read("Ingresar numero: ");
if (numero > 10) {
  console.log("Es mayor que 10");
} else {
  console.log("Es menor que 10");
}
