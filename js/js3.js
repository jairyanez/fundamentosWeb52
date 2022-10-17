/* Programa 1 Medicamentos */
let hora_inicial = 14;
let frecuencia = 2;

let cant_tomas = 24 / frecuencia;

console.log("Horarios");

let horario = hora_inicial;

for (let i = 1;i <= cant_tomas; i++) {
    console.log(`Toma: ` + i + " | " + (horario) + ":00 hrs|");
    horario = horario + frecuencia;
    if (horario >= 24) {
        horario = horario - 24;
    };
};


/* Programa 2 Numeros Perfectos*/

let cant_numeros = prompt("¿Cuantos numeros perfectos quieres ver?");
let encontrados = 0;

let numero = 0;

document.write(`<h2>${cant_numeros} Numeros Perfectos</h2>`);
while (cant_numeros != encontrados){
    numero = numero + 1;
    let suma = 0;

    for (let i = 1; i < numero; i++){
        if(numero % i == 0 ){
            suma = suma + i;
        };
    };
    if (suma == numero) {
        document.write(numero + "<br>");
        encontrados = encontrados + 1;
    };
}