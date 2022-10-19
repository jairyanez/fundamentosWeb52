function calculadora(){
    let num1 = parseInt(document.getElementById("numero-1").value);
    let num2 = parseInt(document.getElementById("numero-2").value);
    
    let signo = document.getElementById("signo").value; 
    let resultado = document.getElementById("resul");


    switch (signo) {
        case '1':
            resultado.value = num1 + num2;
            break;

        case '2':
            resultado.value = num1 - num2;
            break;

        case '3':
            resultado.value = num1 * num2;
            break;
            
        case '4':
            resultado.value = num1 / num2;
            break;

        default:
            break;
    }
}

function generarTabla() {
    let numtabla = parseInt(document.getElementById("tabla").value);
    let tipo = parseInt(document.getElementById("tipo").value);
    let longitud = parseInt(document.getElementById("long").value);
    let tabla = document.getElementById("tabla-resul");
    let push = document.createDocumentFragment();

    document.getElementById("subtitulo").textContent = `Tabla del ${numtabla}`;
    
    switch (tipo) {
        case 1:
            for (let i = 0; i <= longitud; i++) {
                let renglon = document.createElement("tr")
                renglon.innerHTML = `<td>${numtabla}</td><td>x</td><td>${i}</td><td>=</td><td>${(numtabla * i)}</td>`;
                push.appendChild(renglon);
            };
            tabla.innerHTML = "";
            tabla.appendChild(push);
            break;
        case 2:
            for (let i = longitud; i >= 0; i--) {
                let renglon = document.createElement("tr")
                renglon.innerHTML = `<td>${numtabla}</td><td>x</td><td>${i}</td><td>=</td><td>${(numtabla * i)}</td>`;
                push.appendChild(renglon);
            };
            tabla.innerHTML = "";
            tabla.appendChild(push);
            break;
    
    
};

}



