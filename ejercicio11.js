let continuar = true;
let total = 0;

while (continuar) {
  let precio = parseFloat(prompt("Ingrese el precio del producto:"));
  
  if (!isNaN(precio) && precio > 0) {
    total += precio;
  } else {
    alert("Ingrese un valor válido.");
  }

  let respuesta = prompt("¿Desea agregar otro producto? (Si/No):");
  if (respuesta.toUpperCase() !== "si") {
    continuar = false;
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

alert(mensaje);