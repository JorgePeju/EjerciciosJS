//3. Suma o resta (según elija el usuario) dos números reales

var n = parseFloat(prompt("Inserta el primer número:"));
var n1 = parseFloat(prompt("Inserta el segundo número:"));
var signo = prompt("indique si quiere sumar o restar con el signo indicado")
var total;

//Blue para promt

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

if(typeof(total)=="number") {
    alert("Tu resultado es "+total)
} else {
    alert(total)
}

    