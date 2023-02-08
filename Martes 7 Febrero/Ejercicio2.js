/*Dentro del mismo archivo de Javascript y con un único HTML crea:
1. Una función que devuelva el número de cifras de un entero solicitado al usuario*/


function entero() {
    var input = prompt("Inserta un número entero: ")
    var n = parseInt(input);

    console.log(input)


    while (condition) {
        for (let i = 0; i < n.length; i++) {
           
        }
    }
    console.log(n.length);
    console.log(n);

}

// alert("Hay un total de " + cont + " cifras")


//2. Una función que muestre al usuario una secuencia de * (se debe construir la cadena de uno en uno), la cantidad de * será solicitada al usuario
function secuencia1() {
var rep1 = 4
var asterisco = "*"
var sumar = "+"
var guion = "_"
var resultado = ""
// var signos = "*+_" resultado + signos
do { (resultado = resultado + asterisco);
     (resultado = resultado + sumar);
     (resultado = resultado + guion);
    rep1--
} while (rep1 > 0);

console.log(resultado)
}





// 3. Una función que permita mostrar un triángulo como el siguiente:

// var asterisco = "*"
// var resultado = ""
function secuencia2() {
var rep2 = 5


do { (resultado= resultado + asterisco);
    rep2--
    console.log(resultado);
    
    // *
    // **
    // ***       
    // rep = rep -1
    // resultado += asterisco
} while (rep2 > 0);

console.log(resultado)
}
//4 .Una función que devuelva la diferencia en días entre dos fechas del mismo año (sólo tenemos en cuenta dia y mes)

// 22-31 = 9
// abril = 30 días
// mayo = 31 días
// junio = 16 días

let dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
 console.log(dias.length)