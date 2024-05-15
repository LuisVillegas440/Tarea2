/* 15.BOSQUEJO
Pedimos dos numeros
Los comparamos
SI son iguales le decimos que son iguales
SINO decimos que son diferentes
 Pedir al usuario dos números y mostrar si son iguales o diferentes.  */
const read = require("prompt-sync")();
const numero1 = read("Ingresar numero 1: ");
const numero2 = read("Ingresar numero 2: ");
if (numero1 == numero2) {
  console.log("Los numeros son iguales");
} else {
  console.log("Los numeros son diferentes");
}
