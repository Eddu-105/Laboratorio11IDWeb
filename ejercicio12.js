let presupuesto = parseFloat(prompt("Ingrese su presupuesto máximo:"));
let total = 0;
let continuar = true;

while (continuar) {
  let precio = parseFloat(prompt("Ingrese el precio del producto:"));

  if (isNaN(precio) || precio <= 0) {
    console.log("Ingrese un valor válido.");
    continue;
  }

  if (total + precio > presupuesto) {
    console.log("Este producto excede su presupuesto. No será agregado.");
    continuar = false;
  } else {
    total += precio;
    console.log("Producto agregado. Total parcial: S/ " + total.toFixed(2));

    let respuesta = prompt("¿Desea agregar otro producto? (SI/NO):");
    if (respuesta.toUpperCase() !== "Si") {
      continuar = false;
    }
  }
}

let mensaje = "Total parcial: S/ " + total.toFixed(2) + "\n";
let descuento = 0;

if (total > 100) {
  descuento = total * 0.10;
  mensaje += "Tiene un descuento del 10%.\n";
} else if (total >= 50 && total <= 100) {
  descuento = total * 0.05;
  mensaje += "Gana un cupón del 5%.\n";
} else {
  mensaje += "No aplica descuento.\n";
}

let totalFinal = total - descuento;
mensaje += "Total final a pagar: S/ " + totalFinal.toFixed(2);

console.log(mensaje);