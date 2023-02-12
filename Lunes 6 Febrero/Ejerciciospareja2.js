// 2. Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.

let frase = prompt("Inserta una frase: ");
let letra = prompt("Inserta una letra");
var contador = 0;  

for (let i = 0; i < frase.length; i++) {
    if (letra === frase[i]);
    contador++ 
}

alert("La cantidad de veces que aparece "+letra+" es "+contador);
// 



// otra solución 


var frase = prompt('Inserta una frase').toLocaleLowerCase();
var letra = prompt('Inserta una letra').toLocaleLowerCase()[0];
//variable para contar las veces que aparece la letra en la frase
var cont = 0;
for(var i = 0; i<frase.length;i++){
  if(letra==frase.charAt(i)){
    cont++;
  }
}
alert('La letra '+ letra + 'aparece '+ cont +' veces');