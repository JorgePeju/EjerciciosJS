// Pide al usuario varias cadenas de texto.Cuando se pulse el botón de cancelar(del alert) tendrán que mostrarse en el navegador cada cadena de texto concatenada con un guion.


// 1. Pedir cadenas de texto
// 2. Ir sumando cada cadena de texto (acumularlas en un array)
// 3. Mostrar el mensaje


const cadena = [];

const pedirCadenas = () => {

        do { var cadena1 = prompt("Introduzca su frase: ")
                cadena.push(cadena1)

        } while (confirm("Confirme si quiere seguir, en caso contrario pulse cancelar") == true);

}

const concatenarCadenas = () => {

var mensaje=cadena.join("-");
console.log(mensaje)
}

const mostrarMensaje = (mensaje) => {

    document.write(mensaje)
}

pedirCadenas();
concatenarCadenas();
mostrarMensaje();