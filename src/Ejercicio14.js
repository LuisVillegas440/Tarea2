/* 14.BOSQUEJO
Pedimos un numero
SI el numero es mayor que cero decimos que es positivo
SIno decimos que es negativo
 Solicitar al usuario un número y mostrar si es positivo o negativo. */ 
 const read = require('prompt-sync')();
 const numero = read('Ingresar numero: ');
 if (numero > 0) {
    console.log('El numero es positivo');
 } else{
    console.log('El numero es negativo');
 }