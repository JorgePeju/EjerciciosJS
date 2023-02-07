// 5. Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letravar usuario2 = prompt("Inserta tu Usuario: ");

var pass2 = prompt("Inserta una letra: ");
      
var a = "a";

var b = "b";

var c = "c";

if (a===pass2) {
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