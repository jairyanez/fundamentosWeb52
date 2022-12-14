/* Forma 1: Con Nombre */

function divisores(numero) {
    let total = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            total++;
        }
    }
    return total;
};

/* Forma 2: Sin Nombre */
const divisoresV2 = function(numero) {
    let total = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            total++;
        }
    }
    return total;
};

/* Forma 3: Simplificada */
const divisoresV3 = numero => {
    let total = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            total++;
        }
    }
    return total;
};

console.log(`Total de divisores: ${divisores(32)}`);
console.log(`Total de divisores: ${divisoresV2(32)}`);
console.log(`Total de divisores: ${divisoresV3(32)}`);


function calcular() {
    let numero = parseInt(document.getElementById("numero").value);    
    let resultado = document.getElementById("resul");
    resultado.value = divisores(numero);
}


function cambiarimg() {
    let opcion = parseInt(document.getElementById("opcion").value);   
    let base = document.getElementById("imagen"); 
    let nombre = document.getElementById("nombre");
    nombre.textContent = ""; 
    switch (opcion) {
        case 1:
            base.src = "https://tork.news/__export/1659172858759/sites/tork/img/2022/04/12/anuel_aa_5.jpg_317781127.jpg";
            nombre.textContent = "Anuel AA";
            break;
        case 2:
            base.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Bryant_Myers.jpg/640px-Bryant_Myers.jpg";
            nombre.textContent = "Bryant Myers";
            break;
        case 3:
            base.src = "https://akamai.sscdn.co/uploadfile/letras/fotos/c/7/9/7/c7974361a3e99e988d0e72019b2b058f.jpg";
            nombre.textContent = "Bizarrap";
            break;
        case 4:
            base.src = "https://upload.wikimedia.org/wikipedia/commons/a/ad/Arc%C3%A1ngel_%22La_Entrevista%22_-_A_solas_con_Tony_Dandrades.jpg";
            nombre.textContent = "Arcangel";
            break;
        default:
            base.src = "https://www.ferexpo.cl/images/contenido-no-disponible.jpg"
            break;

    }
    
}
