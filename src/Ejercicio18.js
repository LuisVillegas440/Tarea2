/* 18.BOSQUEJO
Pedimos un numero
Vemos si es divisible para 3 Y si es par
SI cumple, entonces decimos que el numero es multipo y par

Pedir al usuario un número y mostrar si es múltiplo de 3 y par. 
 */
const read = require('prompt-sync')();
const numero = read('Ingresar numero: ');
if (numero % 3 == 0 && numero % 2 == 0){
  console.log('El numero es multiplo y par');
}