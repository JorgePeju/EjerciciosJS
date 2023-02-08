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

console.log(palabras[i], palabras[k + 2]);

