//1º Solicite al usuario el ingreso por teclado de 3 notas
//2º Saque la media de las notas
//3º Muestre por pantalla
/*si la nota es menor que 5 'SUSPENSO'
si la nota es mayor o igual 5 y menor que 7 'APROBADO'
si es mayor o igual que 7 y menor o igual que 10 'sobresaliente' */



function notas() {
    var n = parseFloat(prompt("Inserta la primera nota: "));
    var n1 = parseFloat(prompt("Inserta la segunda nota: "));
    var n2 = parseFloat(prompt("Inserta la tercera nota: "));
    var media = (n1 + n2 + n)/3;

    if (media < 5) {
        alert("Su nota media es: " + media + ",está suspenso")
    } else {
        if (media >= 5 && media < 7) {
         alert("Su nota media es: " + media + ",está aprobado")
        } else {
            if (media > 7 && media <= 10) {
                alert("Su nota media es: " + media + ",es sobresaliente")
            }
        }
    }
}


// Solución Pablo y comentada en clase 

/* 

const ej1 = () => {
    const cantidadNotas = 3;
    let notas = [];
    let notaMedia = 0;
    let resultadoFinal;

    //Calcula la media
    function obtenerMedia() {
        notas = solicitarNotas();
        let resultado = 0;
        for (let j = 0; j < cantidadNotas; j++) {
            resultado += parseFloat(notas[j]);
        }
        return (resultado /= cantidadNotas);
    }

    //Califica la nota
    function obtenerResultado(media) {
        if (media >= 7 && media <= 10) {
            return "Sobresaliente";
        } else if (media >= 5 && media < 7) {
            return "Aprobado";
        } else if (media < 5) {
            return "Suspenso";
        } else {
            return "Algo ha ido mal :(.";
        }
    }

    //Escribe resultados en el html
    function mostrarResultado(notasRslt, notaMediaRslt, notaMediaCalifiacion) {
        document.getElementById("nota").innerText = `Notas: ${notasRslt[0]}, ${notasRslt[1]} y ${notasRslt[2]}`;
        document.getElementById("resultado").innerText = `Media: ${notaMediaRslt}.\nCalifiación: ${notaMediaCalifiacion}`;
    }

    //Solicito notas al usuario
    function solicitarNotas() {        
        for (let i = 0; i < cantidadNotas; i++) {
            notas[i] = prompt(`Ingresa la nota ${i + 1}:`);
        }
        return notas;
    }

    notaMedia = obtenerMedia(notas);
    resultadoFinal = obtenerResultado(notaMedia);
    mostrarResultado(notas, notaMedia, resultadoFinal);
}

*/