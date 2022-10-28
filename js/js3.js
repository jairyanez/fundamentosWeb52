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
function num_perfectos() {
    let cant_numeros = parseInt(document.getElementById("numero").value);
    let encontrados = 0;
    let numero = 0;
    let divs = document.getElementById("contenedor");
    divs.innerHTML = "";
    let titulo = document.createElement("h2")
    titulo.textContent = `${cant_numeros} Numeros encontrados`;
    divs.appendChild(titulo);
    lista_num = document.createElement("div");
    lista_num.setAttribute("id","lista-num");

    while (cant_numeros != encontrados){
        numero = numero + 1;
        let suma = 0;

        for (let i = 1; i < numero; i++){
            if(numero % i == 0 ){
                suma = suma + i;
            };
        };
        if (suma == numero) {
            let resultado = document.createElement("h3");
            resultado.innerHTML = `${numero}`;
            lista_num.appendChild(resultado);
            encontrados = encontrados + 1;
            
        };
}
divs.appendChild(lista_num);
}
