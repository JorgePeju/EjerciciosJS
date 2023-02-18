// Se solicita al usuario el nombre y 2 notas de x alumnos y se almacenan en un array
// 1º Sacar la media de cada alumno
// 2º Mostrar por pantalla la media más alta y el nombre de los alumnos que tengan dicha media

// Declaramos las variables y constantes primero

const arrayAlumnos = []; // un array de objetos que tendrá el nombre la nota 1 y la nota 2 y asignaremos la media.
let mensaje;
let mediaMayor;
let alumnosMedia = [];

function pedirDatosAlumnos() {
  // Pido los numeros de alumnos
  let numAlumnos = parseInt(prompt("Introduzca el número de alumnos:"));
  // Verifico que sea un número y válido
  while (isNaN(numAlumnos) || numAlumnos < 1) {
    numAlumnos = parseInt(prompt("Introduzca de nuevo un número de alumnos válidos:"));
  }
  // Una vez tenemos el número de alumnos, pido los nombres y las notas.
  for (let i = 0; i < numAlumnos; i++) {
    let nombre = prompt(`Introduzca el nombre del alumno ${i + 1}:`);
    let nota1 = parseFloat(prompt(`Introduzca la primera nota de ${nombre} ${i + 1}:`));
    // En caso de que no sea una nota correcta, bucle
    while (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
      nota1 = parseFloat(prompt(`Introduzca una nota entre 0 y 10 para la primera nota de ${nombre} ${i + 1}:`));
    }
    //Pido nota2
    let nota2 = parseFloat(prompt(`Introduzca la segunda nota de ${nombre} ${i + 1}:`));
    // En caso de que no sea una nota correcta, bucle
    while (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
      nota2 = parseFloat(prompt(`Introduzca una nota entre 0 y 10 para la segunda nota de ${nombre} ${i + 1}:`));
    }

    console.log(arrayAlumnos)
    arrayAlumnos.push({ nombre, nota1, nota2 });
  }

  return arrayAlumnos;

}


function calcularMedias(arrayAlumnos) {

  for (let i = 0; i < arrayAlumnos.length; i++) {
    // creo una variable temporal para definir mejor la posicion del alumno en el bucle
    let posicion = arrayAlumnos[i];
    console.log(posicion);

    let mediaNota1 = posicion.nota1 / 2;
    console.log(posicion.nota1);

    let mediaNota2 = posicion.nota2 / 2;
    let mediaAlumno = (mediaNota1 + mediaNota2) / 2;

    // pusheamos las notas media a un array independiente
    alumnosMedia.push({ nombre: posicion.nombre, mediaNota1, mediaNota2, mediaAlumno});
  }
  console.log(alumnosMedia)
  return alumnosMedia;
}


function filtrarAlumno(alumnosMedia) {


  for (let i = 0; i < alumnosMedia.length; i++) {
    let posicion = alumnosMedia[i];
    let mediaAlta = 0;
    if (posicion.mediaAlumno> mediaAlta) {
      mediaAlta = posicion.mediaTotal;
    } //mediaALta es ahora el mayor número dentro del array alumnosMedia
  } 
 
  // bucle para buscar el nombre del alumno al que equivale su media más alta
  for (let i = 0; i < alumnosMedia.length; i++) {
     
    if (alumnosMedia[i] === mediaAlta) {
      mediaMayor = mediaAlta;
    }
  }

 return mediaAlta;
}

function mostrarMensaje() {
  

  
}