// Se solicita al usuario el nombre y 2 notas de x alumnos y se almacenan en un array
// 1º Sacar la media de cada alumno
// 2º Mostrar por pantalla la media más alta y el nombre de los alumnos que tengan dicha media

// Declaramos las variables y constantes primero

const arrayAlumnos = []; // un array de objetos que tendrá el nombre la nota 1 y la nota 2 y asignaremos la media.
let mensaje;
let mediaMayor;
let alumnosMedia = [];

function pedirDatosAlumnos() {
  let numAlumnos = parseInt(prompt("Introduzca el número de alumnos:"));
  let arrayAlumnos = [];

  while (isNaN(numAlumnos) || numAlumnos < 1) {
    numAlumnos = parseInt(prompt("Introduzca de nuevo un número de alumnos válidos:"));
  }

  for (let i = 0; i < numAlumnos; i++) {
    let nombre = prompt(`Introduzca el nombre del alumno ${i + 1}:`);
    let nota1 = parseFloat(prompt(`Introduzca la primera nota de ${nombre} ${i + 1}:`));
    while (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
      nota1 = parseFloat(prompt(`Introduzca una nota entre 0 y 10 para la primera nota de ${nombre} ${i + 1}:`));
    }
    let nota2 = parseFloat(prompt(`Introduzca la segunda nota de ${nombre} ${i + 1}:`));
    while (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
      nota2 = parseFloat(prompt(`Introduzca una nota entre 0 y 10 para la segunda nota de ${nombre} ${i + 1}:`));
    }
    arrayAlumnos.push({ nombre, nota1, nota2 });
  }

  return arrayAlumnos;
}

