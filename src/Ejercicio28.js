/* 28.BOSQUEJO
Pedimos nuestro precio total
Y nuestro cupon de porcentaje
Si nuestro precio total supera los $10 se le aplica el cupon de porcentaje
Sino no se le aplica ningun descuento
Primero debemos sacar nuestro valor con el descuento aplicado
Luego sacamos le sacamos el iva
y tendremos nuestro valor final

 Pide al usuario el precio total de una compra en una tienda en línea y el cupón de
descuento a aplicar en porcentaje. Si el precio total de la compra supera los $10,
aplica el descuento, de lo contrario, no aplica ningún descuento. Calcula y muestra el
monto final con el descuento con el IVA del 15%.
 */

const read = require("prompt-sync")();
const precioTotal = parseFloat(read("Ingresar precio total: "));
const cuponPorcentajeDescuento = read("Ingresar el cupon de descuento: ");
const IVA = 15 / 100;
let descuento = 0;
if (precioTotal > 10) {
  descuento = (precioTotal * cuponPorcentajeDescuento) / 100;
}
const baseImponible = precioTotal - descuento;
const ivaCalculado = baseImponible * IVA;
const total = baseImponible + ivaCalculado;

console.log(`IVA: ${ivaCalculado}`);
console.log(`Total: ${total}`);
