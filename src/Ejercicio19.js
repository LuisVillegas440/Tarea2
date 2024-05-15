/* 19.BOSQUEJO
Se pide un numero
Si es divisible para 2, decimos que el numero es divisible para 2
Sino si el numero es divisible para 2 pero su mod es diferente de 0 decimos que es impar
 Solicitar al usuario un número y mostrar si es divisible por 2 o impar.  */
const read = require("prompt-sync")();
const numero = read("Ingresar numero: ");
if (numero % 2 == 0) {
  console.log("El numero es divisible para 2");
} else if (numero % 2 == 1) {
  console.log("El numero es impar");
}
