/*Dentro del mismo archivo de Javascript y con un único HTML crea:
1. Una función que devuelva el número de cifras de un entero solicitado al usuario*/


function entero() {
    var numero = parseInt(prompt("Inserta el primer número:"));
    var contador = 0 ;

    while (numero >= 1) {
        contador = contador + 1;
        numero = numero /10;
    }

    return alert("Hay un total de " + contador + " cifras")
}




//2. Una función que muestre al usuario una secuencia de * (se debe construir la cadena de uno en uno), la cantidad de * será solicitada al usuario
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