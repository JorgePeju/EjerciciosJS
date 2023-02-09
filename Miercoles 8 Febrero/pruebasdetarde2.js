//1. de la primera debes mostrar su segunda letra, 

var palabra1 = prompt("Introduzca la primera palabra")


console.log(palabra1.length); //2. de la segunda su tamaño y 

console.log(palabra1[1]); //1. de la primera debes mostrar su segunda letra, 

//3.las vocales que se encuentren en posiciones impares.

var palabra3 = prompt("Introduce una palabra:");

var letras = "";

for (i = 0; i < palabra3.length; i = i + 2) {
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
