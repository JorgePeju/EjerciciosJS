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