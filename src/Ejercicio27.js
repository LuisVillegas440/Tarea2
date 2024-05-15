/* 27.BOSQUEJO
Pedimos al usuario el salario actual y su porcentaje de incremento anual
Sacamos el porcentaje de nuestro salario actual y se lo sumamos a nuestro sueldo actual
Si nuestro sueldo incrementado supera los 500 se le aplica un incremento del 5%
Si no no se le aplica ningun incremento



 Solicita al usuario su sueldo actual y el porcentaje de incremento salarial anual.
 Si el sueldo actual es menor que 500, aplica el incremento del 5%, de lo contrario, 
 no  aplica ningún incremento. 
 Calcula y muestra el sueldo esperado con el incremento aplicado. */
const read = require('prompt-sync')();
const sueldoActual = parseFloat(read('Ingresar su sueldo actual: '));
const porcentajeIncrementoSalarial = parseFloat(read('Ingresar su porcentaje de incremento salarial anual: '));
const porcentajeAplicadoSueldoActual = (sueldoActual * porcentajeIncrementoSalarial) / 100;
const sueldoIncremento = sueldoActual + porcentajeAplicadoSueldoActual;
let aplicarIncremento = 0;
if (sueldoIncremento < 500) {
    aplicarIncremento = (sueldoIncremento * 5) / 100;
}

const sueldoEsperado = sueldoIncremento + aplicarIncremento;
console.log(`Su incremento fue de ${porcentajeAplicadoSueldoActual} por lo que su sueldo esperado es de ${sueldoEsperado}`);
console.log(porcentajeAplicadoSueldoActual);
console.log(sueldoIncremento);



