let  nota = [];
let promedio = 0;

for (let i = 1; i<=5; i++) {
    nota[i] = parseFloat(prompt("Ingrese nota " + i + " :"));
    
    if (nota[i]>20 || nota[i]<0) {
        console.log("Su nota no está entre los parámetros. Vuelva a ingresar su nota.");
        i--;
    }
    else {
    promedio += nota[i];
    } 
}

console.log("Promedio final: " + promedio/5);