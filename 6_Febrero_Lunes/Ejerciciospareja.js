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
// añadir si el usuario repitiera el mismo número, indicar que lo repite

// con un for y un array hacer una sola línea de promt
// solución davinia:

var n1 = prompt('Inserta un número');
var n2 = prompt('Inserta otro número');
var n3 = prompt('Inserta el último número');

if (n1 <= n2 && n1 < n3) {
    alert('El menor es ' + n1);
} else {
    if (n2 < n1 && n2 <= n3) {
        alert('El menor es ' + n2);
    } else {
        alert('El menor es ' + n3);
    }
}



