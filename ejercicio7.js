let N = parseInt(prompt("Ingrese un número N:"));
let suma = 0;

for (let i = 1; i <= N; i++) {
  if (i % 5 !== 0) {
    suma += i;
  }
}

console.log("La suma de los números del 1 al " + N + " (sin múltiplos de 5) es: " + suma);