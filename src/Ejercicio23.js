/* 22.BOSQUEJO
Pedimos el precio del producto
EL descuento aplicado
Si el precio del producto es mayor que 100, se le aplica el porcentaje descuento, una vez aplicado el porcentaje
Al precio del producto le descontamos el descuento
Y si el precio del producto es menor que 100
No se le aplica descuento

 Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado.
Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el
precio sea mayor $100.
 */
const read = require('prompt-sync')();
const precioProducto = read('Cual es el precio del producto?: ');
const porcentaje_descuento = read('Ingresar el numero del descuento: ');
let descuento = 0;
if (precioProducto > 100 ){
    descuento = (precioProducto * porcentaje_descuento) / 100;
}
const precioFinal = precioProducto - descuento;
console.log(`El precio final con el descuento aplicado es: ${precioFinal}`);