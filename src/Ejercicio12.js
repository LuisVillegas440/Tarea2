/* 12.BOSQUEJO
Pedimos un numero
Comparamos si es mayor o menor que 18
Si es mayor que 18, decinos que es mayor de edad
Sino decimos que es menor de edad
Solicitar al usuario su edad y mostrar si es mayor o menor de edad.  */
const read = require("prompt-sync")();
const edad = read("Ingresar edad: ");
if (edad > 18) {
  console.log("Usted es mayor de edad");
} else {
  console.log("Usted es menor de edad");
}
