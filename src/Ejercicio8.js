/* 8.BOSQUEJO
condiciones:
negativo menor que -20
positivo y par
impar y múltiplo de 7

 Pedir al usuario un número y mostrar si es negativo menor que -20, sino mostrar si
es positivo par o impar múltiplo de 7. 

*/

const read = require("prompt-sync")();
const numero = parseFloat(read("Ingresar numero: "));

if (numero < -20) {
  console.log("Es negativo menor que -20");
} else if (numero > 0 && numero % 2 == 0) {
  console.log("El numero es postivo y es par");
} else if (numero % 2 != 0 && numero % 7 == 0) {
  console.log("El numero es impar y es multiplo de 7");
}
