let numero = parseInt(prompt("Ingrese un número:"));
let temp = numero;
let suma = 0;

let digitos = numero.toString().length;

while (temp > 0) {
  let digito = temp % 10;
  suma += Math.pow(digito, digitos); 
  temp = Math.floor(temp / 10); 
}

if (suma === numero) {
  console.log(numero + " es un número Armstrong.");
} else {
  console.log(numero + " NO es un número Armstrong.");
}