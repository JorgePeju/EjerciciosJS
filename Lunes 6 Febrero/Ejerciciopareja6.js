//6. Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja
var palabras=["Frodo", "Sam", "Pippin", "Merry", "Aragorn", "Legolas", "Gimly"]; 

n = palabras.length;

for (k = 0; k < n; k++) {
  
    for (i = 0; i < (n - k); i++) {
 
        if (palabras[i] > palabras[i + 1]) {  
       
            aux = palabras[i]; 
           
            palabras[i] = palabras[i + 1];
           
            palabras[i + 1] = aux;
        }
    }
}

console.log(palabras)


// otra solución (igual)


var palabras = ['casa', 'perro', 'coche', 'camión', 'sol', 'hola', 'ola'];
//variable para el intercambio
var aux;
for (let i = 1; i < palabras.length; i++){
  for (let j = 0; j < palabras.length - 1; j++){
    if (palabras[j] > palabras[j+1]){
      aux = palabras[j];
      palabras[j] = palabras[j+1];
      palabras[j+1] = aux;
    }
  }
}

alert(palabras);
