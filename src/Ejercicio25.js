/* 25. BOSQUEJO
Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación.


Si el año de fabricación está entre el 2020 y 2023, 

aplicar un descuento del 5% sobre el precio de venta


. mostrar el precio final incluyendo el 15% del IVA. */
const read = require('prompt-sync')();
const precioVehiculo = read('Ingresar precio de venta del vehiculo: ');
const anioFabricacion = read('Ingresar año de fabriacion del vehiculo: ');
let descuento = 0;
const iva = 15;
if (anioFabricacion >= 2020 && anioFabricacion <= 2023) {
    descuento = (precioVehiculo * 5) / 100;
} 
const subtotal = precioVehiculo - descuento;
const ivaAplicado = (subtotal * iva) / 100;
const precioVehiculoFinal = subtotal + ivaAplicado;
console.log('El precio final del vehiculo menos el descuento mas el iva es:', precioVehiculoFinal);