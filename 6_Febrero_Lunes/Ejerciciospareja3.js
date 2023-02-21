//3. Suma o resta (según elija el usuario) dos números reales

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



//// otra solución 

var n1 = parseFloat(prompt('Inserta un número con decimales'));
var n2 = parseFloat(prompt('Inserta otro número con decimales'));
var op = prompt('Si quieres sumar escribe un +, si no un -');

if(op == '+'){
  alert(n1 +'+' +n2 +'='+(n1+n2));
}else{
  alert(n1 +'-' +n2 +'='+(n1-n2));
}
