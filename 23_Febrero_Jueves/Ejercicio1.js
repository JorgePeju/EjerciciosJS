// Calcula la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario.


const arrayNumeros = [];



const pedirNumero = () => {

    let numeroUsuario;
    do {

        numeroUsuario = parseInt(prompt("Introduzca su número: "))
        arrayNumeros.push(numeroUsuario)

    } while (numeroUsuario >= 0);

};

const sumarNumero = (...arrayNumeros) => {

    for (let i = 0; i < arrayNumeros.length; i++) {

        if (arrayNumeros[i] > 0) {
            total += arrayNumeros[i];
        } return total
    }

};



pedirNumero();

console.log(arrayNumeros);



