function Ejercicio1() {
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
}

function Ejercicio2() {
    let frase = prompt("Inserta una frase: ");
    let letra = prompt("Inserta una letra");
    var contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (letra === frase[i]);
        contador++
    }

    alert("La cantidad de veces que aparece " + letra + " es " + contador);

}

function Ejercicio3() {
    var n = parseFloat(prompt("Inserta el primer número:"));
    var signo = prompt("indique si quiere sumar o restar con el signo indicado");
    var n1 = parseFloat(prompt("Inserta el segundo número:"));

    var total;

    switch (signo) {
        case "+":
            total = n + n1;
            break;
        case "-":
            total = n - n1;
            break;
        default:
            total = "Operación no válida";
            break;
    }

    if (typeof (total) == "number") {
        alert("Tu resultado es " + total)
    } else {
        alert(total)
    }
}

function Ejercicio4() {
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
}

function Ejercicio5() {
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
}

function Ejercicio6() {
    var palabras = ["Frodo", "Sam", "Pippin", "Merry", "Aragorn", "Legolas", "Gimly", "Boromir"];

    n = palabras.length;

    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (palabras[i] > palabras[i + 1]) {
                aux = palabras[i];
                palabras[i] = palabras[i + 1];
                palabras[i + 1] = aux;
            }
        }
    }

    console.log(palabras)
}

