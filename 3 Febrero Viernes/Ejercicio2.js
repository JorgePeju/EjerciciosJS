
let frutas = ["Manzana", "Pera"];

console.log(frutas);

console.log(frutas.length);

let primero = frutas[0]

let ultimo = frutas[frutas.length - 1];

function add(){
    alert("Se ha añadido "+ frutas[frutas.length-1]);
    let nuevaLongitud = frutas.push('NuevaFruta');
    console.log(frutas);
}

function del(){
    alert("Se ha eliminado "+ frutas[frutas.length-1]);
    ultimo = frutas.pop();
    console.log(frutas);
}
