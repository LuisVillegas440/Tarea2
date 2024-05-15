/* 13.BOSQUEJO
Pedimos un numero
Si es divisible para dos
Decimos que es par
Sino es impar

 Pedir al usuario un número y mostrar si es par o impar.  */
 
const read = require('prompt-sync')();
const numero = read('Ingresar numero: ');
if (numero % 2 == 0){
    console.log('EL numero es par');
} else {
    console.log('El numero es impar');
}