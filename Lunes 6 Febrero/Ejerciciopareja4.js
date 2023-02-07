//4. Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos) //

var usuario2 = prompt("Inserta tu Usuario: ");

var pass2 = prompt("Inserta tu Contraseña: ");

var usuario1 = "Agapito";

var pass1 = "Soldier";

if (usuario1 === usuario2 && pass1 === pass2) {
  alert("Has entrado en la página")
} else {
  pass2 = prompt("Inserta de nuevo tu Contraseña te quedan 2 intentos: ");
} 
if (usuario1 === usuario2 && pass1 === pass2) {
  alert("Has entrado en la página")
} else {
  var pass2 = prompt("Inserta de nuevo tu Contraseña te quedan 1 intentos: ");
} 
if (usuario1 === usuario2 && pass1 === pass2) {
  alert("Has entrado en la página")
} else {
  alert("No puedes entrar, no te quedan intentos")
}
