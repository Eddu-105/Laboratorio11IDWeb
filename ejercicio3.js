let num = [];
let contadorPar = 0;
let contadorImpar = 0;

for (let i = 0; i<10; i++) {
    num[i] = parseFloat(prompt("Ingresar número " + (i+1) + " :"));

    if (num[i]%2 == 0) {
        contadorPar++;
    }

    if (num[i]%2 == 1) {
        contadorImpar++;
    }
}

console.log("Número pares: " + contadorPar + "\nNúmeros impares: " + contadorImpar);