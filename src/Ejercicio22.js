/* 22.BOSQUEJO
Pedimos al usuario el monto total de la factura
Le pedimos el año de compra 
Si el año de compra es anterior al año 2024, se nos aplica un iva del 12%
Si el año de compra es despues del año 2024, se nos aplica un iva del 15%
Calculamos nuestro monto total mas el iva
Decimos que nuestro monto final es nuestro monto total mas el iva

 Pedir al usuario el monto total de una factura y el año de la compra. Luego, calcular
y mostrar el monto total a pagar incluyendo el IVA. Si el año de la compra es menor
al 2024 el porcentaje del IVA es del 12% caso contrario aplicar el IVA del 15%.
 */
const read = require('prompt-sync')();
const montoTotal = parseFloat(read('Ingresar monto total: '));
const anioCompra = read('Ingresar año de compra: ');
let ivaPorcentaje = 0;
if (anioCompra < 2024) {
    ivaPorcentaje = montoTotal * 1.12;    
} else {
    ivaPorcentaje = montoTotal * 1.15;
}
const montoFinal = montoTotal + ivaPorcentaje;
console.log(`EL total a pagar incluyendo el iva es: ${montoFinal}`);
