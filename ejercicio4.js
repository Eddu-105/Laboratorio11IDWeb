let numMult, producto, volverJugar=false;

do {
    numMult = parseFloat(prompt("Ingrese el número: "));

    for (let i=0; i<12; i++) {
        producto = numMult*(i+1);
        console.log(producto);
    }
    
    let jugar = parseFloat(prompt("¿Desea volver a jugar? (Si/No)"));

    if (jugar.toLowerCase()=="no") {
        volverJugar=false;
    }

} while (volverJugar==true);