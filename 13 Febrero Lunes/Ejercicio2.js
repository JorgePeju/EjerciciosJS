//1º Solicite al usuario el ingreso por teclado de 3 notas
//2º Saque la media de las notas
//3º Muestre por pantalla
/*si la nota es menor que 5 'SUSPENSO'
si la nota es mayor o igual 5 y menor que 7 'APROBADO'
si es mayor o igual que 7 y menor o igual que 10 'sobresaliente' */



function notas() {
    var n = parseFloat(prompt("Inserta la primera nota: "));
    var n1 = parseFloat(prompt("Inserta la segunda nota: "));
    var n2 = parseFloat(prompt("Inserta la tercera nota: "));
    var media = (n1 + n2 + n)/3;

    if (media < 5) {
        alert("Su nota media es: " + media + ",está suspenso")
    } else {
        if (media >= 5 && media < 7) {
         alert("Su nota media es: " + media + ",está aprobado")
        } else {
            if (media > 7 && media <= 10) {
                alert("Su nota media es: " + media + ",es sobresaliente")
            }
        }
    }


}