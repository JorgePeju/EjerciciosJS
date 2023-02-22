// Ejercicios spread/rest
// 1. Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los argumentos.
// sumEveryOther(6, 8, 2, 3, 1); //20
// sumEveryOther(11, 3, 12); //26

const suma = [6, 8, 2, 3, 1];

function sumEveryOther(...suma){

   let total = 0;
      for(var i=0; i<suma.length; i++) {
              total += suma[i];
      }   
      return total;
 }

console.log(sumEveryOther(...suma));

// 2.Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings) y retorne la suma solo de los números.
// addOnlyNums(1, "perro", 2, 4); //7

const onlyNums= [1, "perro", 2, 4]
function addOnlyNums(...onlyNums) {

   let total= 0;

 for (let i = 0; i < onlyNums.length; i++) {
    if (isNaN(onlyNums[i])) {
       total += 0
    } else if (onlyNums == Number ) {
       total += onlyNums[i]
       console.log(total)
    }
 }
   
}
console.log(addOnlyNums(...onlyNums));

// 3.Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
// countTheArgs("gato", "perro"); //2
// countTheArgs("gato", "perro", "pollo", "oso"); //4

const countArg = ["gato", "perro", "pollo", "oso"];
function countTheArgs(...countArg) {
   return countArg.length
}

console.log(countTheArgs(...countArg))


// 4.Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

const combineArrays = [...suma, ...onlyNums]
function combineTwoArrays(combineArrays) {
   return combineArrays
}

console.log(combineTwoArrays(combineArrays))


// 5.Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

// onlyUniques("gato", "pollo", "cerdo", "cerdo"); //['gato', 'pollo', 'cerdo']
// onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

const onlyUniques1 = [1, 1, 2, 2, 3, 6, 7, 8]



// function onlyUniques(onlyUniques1) {
//     const onlyUniques2 =[];
//       for (let i = 0; i < onlyUniques1.length; i++) {
//         if (onlyUniques2.indexOf(onlyUniques1[i]) === -1) {
//          onlyUniques2.push(onlyUniques1[i]);
//         }
//       }
//       return onlyUniques2;
//     }



//console.log(onlyUniques(onlyUniques1))



// 6.Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
// combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
// combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

function namcombineAllArrays(array4) {
   const array1 =[2, 7, 3, 1];
   const array2= [2, 7, 4, 12];
   const array3= [2, 44, 22, 7, 3, 1];
   const array4= array1.concat(array2, array3)

   console.log(array4)
}


// 7.Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.


