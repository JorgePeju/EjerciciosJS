/*Dentro del mismo archivo de Javascript y con un único HTML crea:
1. Una función que devuelva el número de cifras de un entero solicitado al usuario*/


function entero() {
    var numero = parseInt(prompt("Inserta el primer número:"));
    var contador = 0;

    while (numero >= 1) {
        contador = contador + 1;
        numero = numero / 10;
    }

    return alert("Hay un total de " + contador + " cifras")
}




//2. Una función que muestre al usuario una secuencia de * (se debe construir la cadena de uno en uno), la cantidad de * será solicitada al usuario
function secuenciaast() {


    let num = prompt("Indica un número:");
    let cont = [];
    const asterisco = "*"
    for (let i = 0; i < num; i++) {
        cont[i] = asterisco;
        console.log(cont);
        alert(cont)
    }

}




// 3. secuencia signos
function secuencia1() {
    var rep1 = 4
    var asterisco = "*"
    var sumar = "+"
    var guion = "_"
    var resultado1 = ""
    // var signos = "*+_" resultado + signos
    do {
        (resultado1 = resultado1 + asterisco);
        (resultado1 = resultado1 + sumar);
        (resultado1 = resultado1 + guion);
        console.log(resultado1)
        //*+_
        //*+_*+_
        //*+_*+_*+_
        rep1--
    } while (rep1 > 0);

    return alert(resultado1);
}





// 3. Una función que permita mostrar un triángulo como el siguiente:

// var asterisco = "*"
// var resultado = ""

function secuencia2() {
    var rep2 = 5
    var resultado2 = ""
    var asterisco = "*"

    do {
        (resultado2 = resultado2 + asterisco);
        rep2--
        console.log(resultado2);
        // *
        // **
        // ***       
        // rep = rep -1
        // resultado += asterisco
    } while (rep2 > 0);
    console.log(resultado2)
    return alert(resultado2)
}

// otro resultado

//El parámetro indica la cantidad de líneas del triángulo
function ejercicio_2_4(lineas){ 
    var mostrar = "";
    for (let i = 0; i < lineas; i++) {
        for (let j = 0; j <= i; j++) {
            mostrar = mostrar + '*';
        }
        mostrar = mostrar + '\n'; //\n es el salto de línea
        
    }
    alert(mostrar);
}


//4 .Una función que devuelva la diferencia en días entre dos fechas del mismo año (sólo tenemos en cuenta dia y mes)
/*
Partimos de la base que el año no es bisiesto
 22-31 = 9
 abril = 30 días
 mayo = 31 días
 junio = 16 días
 let dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
console.log(dias.length)
let dias = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
los números que te den por prompt
dia1 - dia2 = / si sale negativo multiplicar por -1
mes1 - mes2 = / si sale negativo multiplicar por -1
*/

var fecha1 = prompt("Mete una fecha en día/mes");
var fecha2 = prompt("Mete otra fecha en día/mes");

var fecha1separada = fecha1.split("/"); //fecha entera
var fecha2separada = fecha2.split("/");

var diferencia = 0;
// dos arrays, de tamaño entre 3 y 5. Entre medio el usuario pone la barra
// hay que pasar los días a enteros

var dia1 = parseInt(fecha1separada[0]) // el 0 es el día
var mes1 = parseInt(fecha1separada[1])

var dia2 = parseInt(fecha2separada[0])
var mes2 = parseInt(fecha2separada[1])


// determinar los días 


const meses30 = [4, 6, 9, 11]                          //
const meses31 = []

function esde30(mes) {
    let i = 0
    let encontrado = false

    while (!encontrado && i < meses30.length) {
        if (meses39[i] == mes) {
            encontrado = true
        }
        i++
    }

    return encontrado
}



if (mes1 == mes2) {
    console.log(dia2 - dia1)
} else {
    for (let i = mes1 + 1; i <= mes2 - 1; i++) {
        if (i == 2) {
            diferencia += 28
        } else {
            if (esde30(i)) {
                diferencia += 30
            } else {
                diferencia += 31
            }
        }
    }
    diferencia += dia2
    if (esde30(mes1)) {
        diferencia += (30 - día1)
        else {
        diferencia += (31 - día1)
        }
    }
}
console.log(diferencia)








// funcion split = a partir de un string separa lo que quieras

alert(fecha1.split("/")[0]) // te devuelve un array con una con dos casillas, lo que había delante de la barra y lo que había detrás
// mostrar solo día alert(fecha1.split("/")[0])

