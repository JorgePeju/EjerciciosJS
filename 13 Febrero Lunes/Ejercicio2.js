//1. Se solicita al usuario que ingrese por teclado 10 números, el programa devolverá:
//1º Cuantos son positivos
// 2º Cuantos son negativos
// 3º Cuantos son pares

function numeros1() {
    const cantidadnum = 10;
    let num = [];
    let positivos = "";
    let negativos = "";
    let pares = "";
    let ceros = "";

    function pedirnum() {
        for (let i = 0; i < cantidadnum; i++) {
            num[i] = prompt(`Introduce el número ${i + 1}:`);
        }
        return num;
    }

    function () {
        if (num > 0) {
            positivos += 1
        } else if (num < 0) {
            negativos += 1
        } else if (num % 2) {
            pares += 1
        } else if (num === 0) {
            ceros += 1
        }
    }
}




//2. Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.
     //1º Almacenar todos los números en un array
     //2º Almacenar en otro array los números comprendidos entre el 1 y 250
     //3º Almacenar en otro array los números comprendidos entre el 251 y 500

     function numeros2() {
        const cantidadnum = 10;
        let num = [];
        let mitad1 = [];
        let mitad2 = [];
        let nosuma = [];

        function pedirnum1() {
            for (let i = 0; i < cantidadnum; i++) {
                num[i] = prompt(`Introduce el número ${i + 1}:`);
            }
            return num;
        }

        function () {
            if (num > 0 && num <= 250) {
                mitad1
            } else if (num > 251 && num <= 500) {
                mitad2
            } else if (num <= 0 && num > 500) {
                nosuma
            } else {
                cositas
            }

            }
        }





    }
