/* 17.BOSQUEJO
Pedir primer nombre
Pedir segundo nombre
Calculamos si el primer nombre es mayor que el segundo
SI es mayor decimos que el primer nombre es mayor
SINO decimos que es menor
 Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el
segundo o menor que el segundo
 */
const read = require('prompt-sync')();
const nombre1 = read('Ingresar primer nombre: ');
const nombre2 = read('Ingresar segundo nombre: ');
if (nombre1 > nombre2) {
    console.log('El primer nombre es mayor');
} else {
    console.log('El primer nombre es menor');
}