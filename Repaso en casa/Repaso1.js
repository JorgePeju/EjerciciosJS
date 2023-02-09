//Muestra los números del 0 al 9
for (let i = 0; i < 10; i = i + 1) {
    console.log(i);
}
//Muestra los números del 1 al 10
for (let i = 1; i <= 10; i = i + 1) {
    console.log(i);
}
//Muestra los números del 1 al 10 con operador de post incremento
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//Muestra los números pares que hay entre 1 y 10
for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
}

// 1. Solicita al usuario tres números enteros e indícale cuál es el menor.
var n = parseInt(prompt("Inserta un número entero: "));
var n1 = parseInt(prompt("Inserta un número entero: "));
var n2 = parseInt(prompt("Inserta un número entero: "));

if (n < n1 && n < n2) {
    alert(n + " Es el más pequeño");
}
else
    if (n1 < n && n1 < n2) {
        alert(n1 + " Es el más pequeño");

    } else
        if (n2 < n && n2 < n1) {
            alert(n2 + " Es el más pequeño");
        }

// 2. Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.

let frase = prompt("Inserta una frase: ");
let letra = prompt("Inserta una letra");
var contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (letra === frase[i]);
    contador++
}

// 3. Suma o resta según elija el usuario !Se puede hacer con switch, usando el operador typeof en un if después del switch.

var n1 = parseFloat(prompt("Introduce el primer número: "));
var n2 = parseFloat(prompt("Introduce el segundo número: "));
var operacion = prompt("Introduzca '+' para sumbar o bien '-' para restar: ");
var resultado = ""

if (operacion === '+') {
    resultado = n1 + n2 
} else 
    if (operacion === '-') {
    n1 - n2 
    resultado = n1 - n2
} else {
    resultado = "Operación no válida"
}

alert("Tu resultado es el siguiente: " + resultado)



//4. Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos) //
const USER = 'usuario';
const PASS = 'password';
let attempts = 3;
let inputuser;
let inputpass;

do {
    inputuser = prompt('Escribe tu usuario');
    inputpass = prompt('Escribe tu contraseña');
    attempts--
} while ((inputuser != USER || inputpass != PASS) && attempts > 0);

// 5. Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letravar usuario2 = prompt("Inserta tu Usuario: ");

var pass2 = prompt("Inserta una letra: ");

var a = "a";

var b = "b";

var c = "c";

if (a === pass2) {
    alert("Es un 7")
}
else if (b === pass2) {
    alert("Es un 9")
}
else if (c === pass2) {
    alert("Es un 101")
}
else {
    alert("Te has equivocado de letra")
}

// 6. Una función que devuelva el número de cifras de un entero solicitado al usuario*/


function entero() {
    var numero = parseInt(prompt("Inserta el primer número:"));
    var contador = 0;

    while (numero >= 1) {
        contador = contador + 1;
        console.log(contador)
        numero = numero / 10;
    }

    return alert("Hay un total de " + contador + " cifras")
}

// 7. muestre al usuario una secuencia de * (se debe construir la cadena de uno en uno), la cantidad de * será solicitada al usuario

let num = prompt("Indica un número:");
let cont = [];
const asterisco = "*"

for (let i = 0; i < num; i++) {
    cont[i] = asterisco;
    console.log(cont);
}

alert(cont)

// 8. secuencia signos

var rep1 = 4 //NO CONST
var signos = "*+_"
var resultado1 = ""

do {
    (resultado1 = resultado1 + signos);
    rep1--
} while (rep1 > 0);

console.log(resultado1) // Al final para ver la línea

// 9.Una función que permita mostrar un triángulo como el siguiente:


var rep2 = 5
var resultado2 = ""
var asterisco = "*"

do {
    (resultado2 = resultado2 + asterisco);
    rep2--
    console.log(resultado2); //Durante para ver la suma
} while (rep2 > 0);

// 10. Una palabra, mostrar su segunda letra y su tamaño

var palabra1 = prompt("Introduzca la primera palabra")

console.log(palabra1[1]);

console.log(palabra1.length);

// 10.1 Las vocales en posiciones impares

var palabra3 = prompt("Introduce una palabra:");

var letras = "";

for (i = 0; i < palabra3.length; i += 2) {
    switch (palabra3[i]) {
        case "a":
        case "A":
        case "e":
        case "E":
        case "i":
        case "I":
        case "o":
        case "O":
        case "u":
        case "U":
            letras += palabra3[i];
    }
}
console.log(letras);

