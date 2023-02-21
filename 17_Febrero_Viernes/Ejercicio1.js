// 1. Solicitar los nombres de "x" alumnos de un curso  que se han dividido en dos grupos: A y B de acuerdo al sexo y el nombre. El grupo A esta formado por las mujeres con un nombre anterior a la M y los hombres con un nombre posterior a la N y el grupo B por el resto. Escribir un programa que pregunte al usuario cuantos alumnos son de cada grupo y los muestre por pantalla.



const nombres = [];
var grupoa = "";
var grupob = "";

// function (){
//  const filtrasionesexo = nombres.filter((word)) => ();
// }


function solicitarnombres(nombres) {
    do {
        nombres = prompt(`Introduce tu nombre y sexo ("H" para hombre y "M" para mujer)`)

    } while ((nombre === word && nombre == "H") || (nombre === word && nombre == "M"));




    // nombres = prompt(`Introduce tu nombre y sexo ("H" para hombre y "M" para mujer)`);
    // if () {

    // }
}
return nombres;



function separar(nombre) {
    if (nombre == "H" && nombre > "n" && nombre == "M" && nombre > "m") {
        grupoa++
    } else {
        if (nombre == "H" && nombre <= "n" && nombre == "M" && nombre <= "m") {
            grupob++
        }
    }
}


//  const  filtrasione = nombres.filter((word, index) => index % 2 == 0 && (word.includes('t') || word.includes('a')));

