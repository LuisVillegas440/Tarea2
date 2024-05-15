/* 9.BOSQUEJO
Pedimos el salario actual
Pedimos el aumento
Multiplicamos el salarioActual por el porcentajeAumento y los divimos para 100 para obtener nuestro aumento
A nuestro salarioActual le sumamos el aumentoRecibido para sacar nuestro salario mas el aumento.

 Calculadora de sueldo con aumento: Pide al usuario que ingrese su salario actual y el
porcentaje de aumento que recibirá. Calcula y muestra el nuevo salario después del
aumento */
const read = require("prompt-sync")();
const salarioActual = parseFloat(read("Ingresar salario actual: "));
const porcentajeAumento = read("Ingresar el porcentaje de aumento: ");
const aumentoRecibido = (salarioActual * porcentajeAumento) / 100;
const salarioAumentado = salarioActual + aumentoRecibido;
console.log(`El nuevo salario con el aumento es: ${salarioAumentado}`);
