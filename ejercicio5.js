let monto, billete100, billete50, billete20, billete10;

do {
    monto = parseInt(prompt("Ingrese el monto a retirar (múltiplo de 10): "));

    if (monto <= 0 || monto % 10 !== 0) {
        console.log("Monto inválido. Debe ser positivo y múltiplo de 10.");
    } else {

        billete100 = Math.floor(monto / 100);
        monto %= 100;

        billete50 = Math.floor(monto / 50);
        monto %= 50;

        billete20 = Math.floor(monto / 20);
        monto %= 20;

        billete10 = Math.floor(monto / 10);
        monto %= 10;

        console.log("Desglose de billetes:");
        console.log("100 soles: " + billete100);
        console.log("50 soles: " + billete50);
        console.log("20 soles: " + billete20);
        console.log("10 soles: " + billete10);
    }

    let repetir = prompt("¿Desea realizar otro retiro? (Si/No)");

} while (repetir.toLowerCase() === "si");