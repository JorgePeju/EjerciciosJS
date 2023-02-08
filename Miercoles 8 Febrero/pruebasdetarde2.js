//1. de la primera debes mostrar su segunda letra, 

// var palabra1 = prompt("Introduzca la primera palabra")


// console.log(palabra1.length); //2. de la segunda su tamaño y 

//  console.log(palabra1[1]); //1. de la primera debes mostrar su segunda letra, 

//3.las vocales que se encuentren en posiciones impares.

var palabra = prompt("Inserte una palabra");

let count = 0;

for (let i = 0; i < palabra.length; i++) {
  if (i + 2 !== 0 && (palabra[i] === 'a' || palabra[i] === 'e' || palabra[i] === 'i' || palabra[i] === 'o' || palabra[i] === 'u')) {
    count++;
  }
}
console.log(count)
// esternocledomastoideo
// alert(contador) 