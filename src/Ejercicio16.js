/* 16.BOSQUEJO
Pedimos un caracter 
Si es igual a: a,e,i,o,u,A,E,I,O,U
Decimos que es vocal
SINO es consonante

 Solicitar al usuario un carácter y mostrar si es una vocal o consonante.  */
 
const read = require("prompt-sync")();
const caracter = read("Ingresar un caracter: ");
if (
  caracter == "a" ||
  caracter == "e" ||
  caracter == "i" ||
  caracter == "o" ||
  caracter == "u" ||
  caracter == "A" ||
  caracter == "E" ||
  caracter == "I" ||
  caracter == "O" ||
  caracter == "U"
) {
  console.log("Es una vocal");
} else {
    console.log('Es una consonante');
}
