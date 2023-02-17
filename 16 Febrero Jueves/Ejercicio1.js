// 1. Usando la función filter en una sola línea coloca en un array las palabras que contienen "t" y/o "a" y están en posiciones impares.
// array constante del que partimos: ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"]


/*
function comprobasione() {
   for (let i = 0; i < arraycosas.length; i++) {

     if (i%2 != 0 && i.indexOf("a") || i.indexOf("t")) {
         console.log(i)
     }
   }
    



}

const arraycosas = ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"]

var filtrasione = arraycosas.filter(arraycosas%2 !=0);
console.log(filtrasione)

*/
const arraydecosas = ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"];  
const filtrasione = arraydecosas.filter((word, index) => index % 2 == 0 && (word.includes('t') || word.includes('a')));  
console.log(filtrasione);

// ======================================================================



const numeros = [8, 400, 200, 345, 22, 600, 731, 800, 321, 230]


var pares = numeros.filter(numero => numeros.length %2 ==0);
console.log(pares);
var impares = numeros.filter(numero => numeros.length %2 !=0);
console.log(impares)


