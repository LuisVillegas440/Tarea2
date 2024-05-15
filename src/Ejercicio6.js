/* 6.BOSQUEJO
Pedimos los 4 numeros
Nos dicen que el numero 1 es la mitad del numero 2, para que esto se cumpla primero tenemos que sacar la mitad del primero numero 
Para sacar la mitad de un numero lo dividimos para 2, Una vez hayamos sacado la mitad comparamos si el segundo numero es la mitad del primero.
Nos dicen que si el numero es divisor del numero 4, para que esto se cumpla tenemos que divir el numero 4 para el numero 3.
Para saber si es divisible, sabemos que tenemos que sacar MOD y si el MOD es 0 entonces se cumple la condicion y decimos que si es divisor.

 Escribir un algoritmo que lea cuatro números y determine si el numero 1 es la mitad
del número 2; Y si el numero 3 es divisor del numero4. */
const read = require("prompt-sync")();
function Arreglosnumeros() {
  let numeros = [];
  let valor = parseFloat(read("Ingresar numero: "));
  numeros.push(valor);
  valor = parseFloat(read("Ingresar numero: "));
  numeros.push(valor);
  valor = parseFloat(read("Ingresar numero: "));
  numeros.push(valor);
  valor = parseFloat(read("Ingresar numero: "));
  numeros.push(valor);
  console.log(numeros);
  if (numeros[1] == (numeros[0] / 2)) {
    //Divimos el primer numero para saber si es la mitad del segundo.
  } 
  if (numeros[3] % numeros[2] == 0 ) {
    //Divimos el cuarto numero por el tercer numero, si da 0 entonces si es divisible.
    console.log(`El primer numero si es la mitad del segundo y el tercer numero si es divisor del cuarto numero`);
  }
}
Arreglosnumeros();
