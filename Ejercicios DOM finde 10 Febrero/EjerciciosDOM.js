// 1. Número de enlaces de la página

function nenlaces() {
    var enlaces = document.getElementsByTagName("a");
    var contador = 0;
    for (i = 0; i < enlaces.length; i++) {
        contador += 1;
        console.log(contador);
    }
    alert(contador)
} 

// 2. Dirección a la que enlaza el penúltimo enlace

function penultimo() {
    var enlaces = document.getElementsByTagName("a");
    var penultimo = enlaces[enlaces.length - 2]
    alert(penultimo)
} 

// 3. Numero de enlaces que enlazan a http://prueba


function enlacesprueba() {
    var enlaces = document.getElementsByName("a.http://prueba");
    var contador = 0;
    for (i = 0; i < enlaces.length; i++) {
        contador += 1;
        console.log(contador);
    }
    alert(contador)
} 

// 4. Número de enlaces del tercer párrafo
function enlacestercer() {
    var enlaces = document.getElementsByTagName("p");
    var contador = 0;
    for (i = 0; i < enlaces.length; i++) {
       if (enlaces[3]) {
         
       }
    }
    alert(contador)
}
