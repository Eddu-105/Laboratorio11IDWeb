let repetir = true;

do {
    let limite = parseInt(prompt("Ingrese un número límite: "));

    if (isNaN(limite) || limite < 2) {
        console.log("Ingrese un número válido mayor o igual a 2.");
    } else {
        console.log("Números primos entre 1 y " + limite + ":");
        let contadorPrimos = 0;

        for (let i = 2; i <= limite; i++) {
            let esPrimo = true;

            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    esPrimo = false;
                    break;
                }
            }

            if (esPrimo) {
                console.log(i);
                contadorPrimos++;
            }
        }

        console.log("Cantidad total de números primos: " + contadorPrimos);
    }

    let opcion = prompt("¿Desea ingresar otro número? (Si/No)")
    if (opcion.toLowerCase() !== "si") {
        repetir = false;
    }

} while (repetir === true);