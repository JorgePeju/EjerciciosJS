// 1. Pide elementos al usuario e insértalos en un array hasta que indique no quiere más e indica cuáles son palabras y cuáles números.

var elementos = [];
    var cont = "";
    for (var i = 0; i <= 2; i++) {
        var x = prompt("Ingresa tu nombre:");
        elementos[i] = x;
    }
    for (var i = 0; i <= 2; i++) {
        cont += elementos[i] + " ";
    }







// 2. Pide una hora al usuario en formato horas, minutos y segundos, valídala y pásala a segundos.

var hora1 = prompt("Intrduzca una hora en formato HH/MM/SS")

const hora = 1;

const minutos = hora * 60;

const segundos = minutos * 60;

