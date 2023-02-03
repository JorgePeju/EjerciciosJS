function add(){
    alert('Fruta Añadida!');
    let nuevaLongitud = frutas.push('NuevaFruta');
    console.log(frutas);
}

function del(){
    alert('Fruta Eliminada');
    ultimo = frutas.pop();
    console.log(frutas);
}

let frutas = ["Manzana", "Banana"];

console.log(frutas); // Manzana y Banana 

console.log(frutas.length); // 2

let primero = frutas[0] // Manzana

let ultimo = frutas[frutas.length - 1]; // Banana

; // Añade "Naranja" al final
    // ["Manzana", "Banana", "Naranja"]

