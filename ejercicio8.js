let opcion;

do {
  opcion = parseInt(prompt(
    "MENÚ DE OPCIONES\n" +
    "1. Calcular área del círculo\n" +
    "2. Calcular área del rectángulo\n" +
    "3. Salir\n\n" +
    "Elige una opción:"
  ));

switch (opcion) {
    case 1:
      let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
      let areaCirculo = Math.PI * radio ** 2;
      console.log("El área del círculo es: " + areaCirculo.toFixed(2));
      break;

    case 2:
      let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
      let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
      let areaRect = base * altura;
      console.log("El área del rectángulo es: " + areaRect.toFixed(2));
      break;

    case 3:
      console.log("Saliendo del programa.");
      break;

    default:
      console.log("Opción no válida. Intente nuevamente.");
  }
} while (opcion !== 3);