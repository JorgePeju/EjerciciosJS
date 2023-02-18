// Se solicita al usuario el nombre y 2 notas de x alumnos y se almacenan en un array
// 1º Sacar la media de cada alumno
// 2º Mostrar por pantalla la media más alta y el nombre de los alumnos que tengan dicha media

// Declaramos las variables y constantes primero

const arrayAlumnos = []; // un array de objetos que tendrá el nombre la nota 1 y la nota 2 y asignaremos la media.
let mensaje;
let mediaMayor;
let alumnosMedia = [];

function pedirDatosAlumnos() {
  let numAlumnos = parseInt(prompt("Introduce el número de alumnos (al menos 1):"));

  while (isNaN(numAlumnos) || numAlumnos < 1) {
    numAlumnos = parseInt(prompt("Introduce un número válido de alumnos (al menos 1):"));
  }

  for (let i = 0; i < numAlumnos; i++) {
    let nombre = prompt(`Introduce el nombre del alumno ${i + 1}:`);
    let nota1 = parseFloat(prompt(`Introduce la primera nota de ${nombre} ${i + 1}:`));
    let nota2 = parseFloat(prompt(`Introduce la segunda nota de ${nombre} ${i + 1}:`));

    arrayAlumnos.push({ nombre, nota1, nota2 });
  }

  return alumnos;
}

function validarDatosAlumnos(alumnos) {
  for (let i = 0; i < alumnos.length; i++) {
    let alumno = alumnos[i];

    if (!alumno.nombre || alumno.nota1 < 0 || alumno.nota1 > 10 || alumno.nota2 < 0 || alumno.nota2 > 10) {
      return false;
    }
  }

  return true;
}