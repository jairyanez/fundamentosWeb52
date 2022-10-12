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