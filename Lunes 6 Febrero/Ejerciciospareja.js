// 1. Solicita al usuario tres números enteros e indícale cuál es el menor.
var n = prompt("Inserta un número entero: ");
var n1 = prompt("Inserta un número entero: ");
var n2 = prompt("Inserta un número entero: ");

if (n < n1 && n < n2) {
    alert(n + " Es el más pequeño");
} else if (n1 < n && n1 < n2) {
    alert(n1 + " Es el más pequeño");
} else if (n2 < n && n2 < n1) {
    alert(n2 + " Es el más pequeño");
}
// añadir si el usuario repitiera el mismo número, indicar que lo repite


