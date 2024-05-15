/* 29.BOSQUEJO
Pedimos nuestro salario actual y nuestro años de antiguedad
Calculamos nuestra tiempo de antiguedad multiplicando el salario actual con los años de antiguedad
Si nuestros años de antiguedad superan los 3 años le damos un 3% de su antiguedad
Si no, no se le da el 3%

Pide al usuario su salario actual y la cantidad de años de antigüedad. Calcule el valor
del bono de antigüedad del empleado aplicando el 3% del salario por el número de
años de antigüedad siempre y cuando supere los 3 años, caso contrario el bono de
antigüedad es de cero. Se pide mostrar el salaria y el bono de antigüedad. */
const read = require("prompt-sync")();
const MINIMO_ANIOS_PARA_BONO = 3;
const PORCENTAJE_BONO = 3 / 100;
const salarioActual = read("Ingresar su salario actual: ");
const aniosAntiguedad = read("Ingresar años de antiguedad: ");
const antiguedad = salarioActual * aniosAntiguedad;
let bonoAntiguedad = 0;
if (aniosAntiguedad > MINIMO_ANIOS_PARA_BONO) {
  bonoAntiguedad = antiguedad * PORCENTAJE_BONO;
}
console.log(`Tu salario actual: ${salarioActual}`);
console.log(`Tu bono de antiguedad es: ${bonoAntiguedad}`);
