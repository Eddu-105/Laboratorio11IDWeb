let opcion;

do {
  opcion = parseInt(prompt(
    "MENÚ DE OPCIONES\n" +
    "1. Calcular estadísticas de N notas\n" +
    "2. Contar números pares e impares en un rango\n" +
    "3. Generar una tabla de multiplicar\n" +
    "4. Salir\n\n" +
    "Elige una opción:"
  ));

  switch (opcion) {
    case 1: {
      let numNotas = parseInt(prompt("¿Cuántas notas deseas ingresar?"));
      let notas = [];
      for (let i = 0; i < N; i++) {
        notas.push(parseFloat(prompt(`Nota ${i + 1}:`)));
      }

      let suma = 0;
      for (let i = 0; i < numNotas; i++) {
        suma += notas[i];
      }
      let promedio = suma / numNotas;
      let max = Math.max(...notas);
      let min = Math.min(...notas);
      let pares = 0, impares = 0;

      for (let nota of notas) {
        if (Math.floor(nota) % 2 === 0) 
            pares++;
        else 
            impares++;
      }

      let encimaPromedio = notas.filter(n => n > promedio).length;

      console.log(
        "RESULTADOS DE ESTADÍSTICAS:\n" +
        "Promedio: " + promedio.toFixed(2) + "\n" +
        "Valor máximo: " + max + "\n" +
        "Valor mínimo: " + min + "\n" +
        "Cantidad de pares: " + pares + "\n" +
        "Cantidad de impares: " + impares + "\n" +
        "Notas por encima del promedio: " + encimaPromedio
      );
      break;
    }

    case 2: {
      let inicio = parseInt(prompt("Ingrese el número inicial del rango:"));
      let fin = parseInt(prompt("Ingrese el número final del rango:"));
      let pares = 0, impares = 0;

      for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) pares++;
        else impares++;
      }

        console.log(
        `En el rango de ${inicio} a ${fin}:\n` +
        `Números pares: ${pares}\n` +
        `Números impares: ${impares}`
      );
      break;
    }

    case 3: {
      let num = parseInt(prompt("Ingrese un número para su tabla de multiplicar:"));
      let resultado = `Tabla del ${num}\n`;
      for (let i = 1; i <= 12; i++) {
        resultado += `${num} x ${i} = ${num * i}\n`;
      }
      console.log(resultado);
      break;
    }

    case 4:
      console.log("Saliendo del programa.");
      break;

    default:
      console.log("Opción no válida. Intente nuevamente.");
  }

} while (opcion !== 4);