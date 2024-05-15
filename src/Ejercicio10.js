/* 10.BOSQUEJO
Pedimos nuestro credito Actual
Pedimos el tipo de aumento que queremos
SI Tipo de Tarjeta es 1 el aumento es de 100
SI Tipo de Tarjeta es 2 el aumento es de 200
SI Tipo de Tarjeta es 3 el aumento es de 300
Para cualquier otro tipo es de 500
Nos piden el nuevo limite de credito, esto lo sacamos sumando nuestro credicto actual + el aumento de credito
Luego sacamos el 10% a nuestro nuevo limite de credito actual
Y para aumentar el 10% a nuestro limite nuevo de credito sumamos el 10 + el nuevo credito
Y obtenemos nuestro saldo final del limite.


 El banco POO ha decidido aumentar el límite de crédito de las tarjetas de crédito de
sus clientes, para esto considera que:
Si su cliente tiene tarjeta tipo 1, el aumento será del $100 .
Si tiene tipo 2 el aumento será del $200
Si tiene tipo 3, el aumento será del $300
Para cualquier otro tipo será del 500
Se pide realizar un algoritmo que ayude al banco a determinar el nuevo límite de
crédito que tendrá una persona en su tarjeta considerando que después del aumento
se tendrá que subir 10% adicionales a todas las tarjetas
 */

const read = require("prompt-sync")();
const creditoActual = parseFloat(
  read("Ingresar su cantidad de dinero de su tarjeta de credito: ")
);
const tipo = parseFloat(
  read("Ingresar cual tipo de aumento desea, disponemos del 1,2,3: ")
);
let aumentoDeCredito = 500;
if (tipo == 1) {
  aumentoDeCredito = 100;
} else if (tipo == 2) {
  aumentoDeCredito = 200;
} else if (tipo == 3) {
  aumentoDeCredito = 300;
}
const nuevoCredito = (creditoActual + aumentoDeCredito) * 1.1;
//const adicional10Porciento = (nuevoCredito * 10) / 100;
//const aplicado10Porciento = nuevoCredito + adicional10Porciento;
console.log(`Tu nuevo credito es: ${nuevoCredito}`);


