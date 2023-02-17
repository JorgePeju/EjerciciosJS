// Se solicita al usuario el nombre y 2 notas de x alumnos y se almacenan en un array
// 1º Sacar la media de cada alumno
// 2º Mostrar por pantalla la la media más alta y el nombre de los alumnos que tengan dicha media

// Declaramos las variables primero

const arrayAlumnos = []; // un array de objetos que tendrá el nombre la nota 1 y la nota 2 y asignaremos la media.
let mensaje;
let mediaMayor;
let alumnosMedia=[]; 
let numAlumnos=parseInt(prompt("Introduzca el número de alumnos: "))  ;


// function validacionDatos() {

// do { 
    
// } while (condition);


// }

//function solicitarDatos() {

  //  let numAlumnos=parseInt(prompt("Introduzca el número de alumnos: "))  ;

    for (let i = 0; i < numAlumnos.length; i++) {
        console.log(numAlumnos)
    
        let nombre=isNaN(prompt("Introduzca el nombre del alumno:"));
        console.log(nombre)

        do { nombre=isNaN(prompt("Introduzca el nombre del alumno:"))
            
        } while (nombre === isNaN);

        let nota1=parseFloat(prompt("Introduzca la primera nota: "));
        console.log(nota1)

        do { nota1=parseFloat(prompt("Introduzca la primera nota: "));
            
        } while (nota1 != isNaN);

        let nota2=parseFloat(prompt("Introduzca la segunda nota: "));

        do { nota2=parseFloat(prompt("Introduzca la segunda nota: "));
            
        } while (nota2 != isNaN);
        
        almacenarDatos(nombre, nota1, nota2);
        
    }
//}

// function almacenarDatos(nombre, nota1, nota2) {

//     arrayAlumnos.push(nombre, nota1, nota2);
// }