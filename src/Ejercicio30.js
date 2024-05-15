/* 30.BOSQUEJO
Pedimos la cuenta total
Y pedimos el porcentaje del descuento
Si la cuenta supera los $70 se le aplica el descuento, para sacar el descuento multiplicamos la cuenta y el porcentaje de descuento que ingresamos esto lo divimos para 100 y tenemos nuestro descuento
Primero le aplicamos el descuento a nuestra cuenta
Le aplicamos el iva
y obtenemos nuestra cuenta final

Pide al usuario el total de su cuenta en un restaurante y el porcentaje de descuento
que ofrece por ser cliente frecuente. Si el total de la cuenta supera los $70, aplica el
descuento por fidelidad, de lo contrario, no se aplica ningún descuento. Calcula y
muestra el monto final con el descuento aplicado más el IVA del 15%.*/
const read = require('prompt-sync')();
const cuenta = read('Ingresar la cuenta total: ');
const descuentoPorcentaje = read('Ingresar el descuento: ');
const iva = 15;
let descuentoAplicado = 0;
if (cuenta > 70 ){
    descuentoAplicado = (cuenta * descuentoPorcentaje) / 100;
} 
const subtotal = cuenta - descuentoAplicado;
const ivaAplicado = (subtotal * iva) / 100;
const total = subtotal + ivaAplicado;
console.log(total);
