/* 7.BOSQUEJO
Nos dicen si el numero 1 es divisor del numero 3, entonces divimos el numero 3 por el numero 1 es decir sacamos el MOD 
Sabemos que si el resultado de MOD es 0 entonces si es divisible.
Nos dicen que el numero 2 es el doble del numero 4, para sacar el doble de un numero multiplicamos por 2, entonces Multiplicamos el segundo numero por 2 para compararlo con el cuarto numero, Si el segundo numero es el doble del cuarto numero SE CUMPlE la funcion 

 Escribir un algoritmo que lea cuatro números y determine si el numero 1 es divisor
del numero3 Y si el numero 2 es el doble del numero4. */
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
  //Divimos el tercer numero por el primer numero
  if (numeros[2] % numeros[0] == 0) {
    //Multiplicamos el segundo numero por 2, para saber si es el doble del cuarto numero.
    if (numeros[3] == numeros[1] * 2) {
      console.log(
        "El primer numero si es divisor del tercer numero y el segundo numero si es el doble del cuarto numero"
      );
    }
  }
}
Arreglosnumeros();


