// 2. Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.

let frase = prompt("Inserta una frase: ");
let letra = prompt("Inserta una letra");
var contador = 0;  

for (let i = 0; i < frase.length; i++) {
    if (letra === frase[i]);
    contador++ 
}

alert("La cantidad de veces que aparece "+letra+" es "+contador);
