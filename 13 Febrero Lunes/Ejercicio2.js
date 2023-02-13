//1. Se solicita al usuario que ingrese por teclado 10 números, el programa devolverá:
	//1º Cuantos son positivos
   // 2º Cuantos son negativos
   // 3º Cuantos son pares

function numeros1() {
    const cantidadnum = 10;
    let num = [];
    //let  = 0;
    //let ;

    function pedirnum(params) {
        for (let i = 0; i < cantidadnum; i++) {
            num[i] = prompt(`Ingresa los números ${i + 1}:`);
        }
        return num;   
    }

    function () {
  
}




//2. Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.
     //1º Almacenar todos los números en un array
     //2º Almacenar en otro array los números comprendidos entre el 1 y 250
     //3º Almacenar en otro array los números comprendidos entre el 251 y 500