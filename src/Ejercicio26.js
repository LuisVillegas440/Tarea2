/* 26.BOSQUEJO
Se pide el precio y el porcentaje al usuario
SI el precio supera los 200 
    se le aplica el impuesto
    impuesto aplicado = al precio del articulo * el porcentaje del impuesto / cien
SINO
    no se le aplica impuesto    
Calculamos el precio final sumando el precio del articulo mas el impuesto aplicado y el resultado de la suma decimos que es el precio final.
    
 


 Pide al usuario el precio de un artículo y el porcentaje de impuesto de ventas aplicado
en su región. Si el precio del artículo supera los $200, aplica el impuesto de ventas,
de lo contrario, no se aplica impuesto. Calcula y muestra el precio final luego de
aplicar el impuesto. 
 */

const read = require('prompt-sync')();
const precioArticulo = parseFloat(read('Ingresar precio del articulo: '));
const porcentajeImpuesto = read('Ingresar el impuesto de su region: ');
let impuestoAplicado = 0;
if (precioArticulo > 200 ){
    impuestoAplicado = (precioArticulo * porcentajeImpuesto) / 100;
} 
const precioFinal = precioArticulo + impuestoAplicado;
console.log(`El precio final con el impuesto aplicado es:${precioFinal}`);