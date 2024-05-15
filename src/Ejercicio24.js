/* 24.BOSQUEJO
Pedimos la nota del examen
SI la nota del examen es mayor o igual que 60 decimos que ha aprobado
SI la nota es mayor que 40 y menor que 60 decimos que se ha quedado recuperacion
Y si la nota es menor que 40 decimos que ha perdido la materia


 Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado,
considerando que la nota mínima de aprobación es 60 puntos. Si la nota es mayor a
40 y menor a 60 se queda para recuperación caso contario pierde la materia. */
const read = require("prompt-sync")();
const notaExamen = parseFloat(read("Ingresar nota de examen: "));
if (notaExamen >= 60) {
  console.log("Usted ha aprobado");
} else if (notaExamen > 40 && notaExamen < 60) {
  console.log("Usted se ha quedado a recuperacion");
} else {
  console.log("Usted ha perdido la materia");
}
