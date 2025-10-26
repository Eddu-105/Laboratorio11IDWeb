let edad, etapaEdad;

edad = parseFloat(prompt("Ingrese su edad:"));

if (edad<12) {
    etapaEdad = "Niño";
}

if (edad<=17 &&  edad>=12) {
    etapaEdad = "Adolescente";
}

if (edad<=59 && edad>=18) {
    etapaEdad = "Adulto";
}

if (edad>=60) {
    etapaEdad = "Niño";
}

console.log("Usted es un: " + etapaEdad);
