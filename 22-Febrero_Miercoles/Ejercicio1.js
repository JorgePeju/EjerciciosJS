// Juego piedra papel o tijera

const piedraPapelTijera = () => {

    let piedra = 1;
    let tijera = 2;
    let papel = 3;
    const min = Math.ceil(1);
    const max = Math.floor(4);
    let maquina = 0;
    let jugador = 0;
     

    let resultado = Math.floor(Math.random() * (max - min) + min);
    let usuario = parseInt(prompt(`Introduzca "1" para "Piedra, "2" para "Papel" y "3" para "Tijera"`));

    console.log(resultado)

    if (resultado === piedra && usuario === piedra || resultado === tijera && usuario === tijera || resultado === papel && usuario === papel) {
        alert(`Empate`)
    } else {
        if (resultado === piedra && usuario === tijera || resultado === tijera && usuario === papel || resultado === papel && usuario === piedra) {
            alert(`Has perdido`)
            maquina += 1
        } else {
            if (usuario === piedra && resultado === tijera || usuario === tijera && resultado === papel || usuario === papel && resultado === piedra) {
                alert(`Has ganado`)
                jugador += 1
            
            }  return jugador, maquina
         
        }
           
    }
     
 pintarDom()
}

function pintarDom(jugador,maquina) {
    document.getElementById("#jugador").innerHTML = `Jugador: ${jugador}`;
    document.getElementById("#maquina").innerHTML = `Máquina: ${maquina}`;


}




// const piedraPapelTijera = (eleccionUsuario) => {
//     let piedra = 1;
//     let tijera = 2;
//     let papel = 3;
//     const min = Math.ceil(1);
//     const max = Math.floor(4);
    
//     let resultado = Math.floor(Math.random() * (max - min) + min);
  
//     let usuario;
//     if (eleccionUsuario === "piedra") {
//       usuario = piedra;
//     } else if (eleccionUsuario === "tijera") {
//       usuario = tijera;
//     } else if (eleccionUsuario === "papel") {
//       usuario = papel;
//     }
  
//     console.log(resultado);
  
//     if (resultado === piedra && usuario === piedra || resultado === tijera && usuario === tijera || resultado === papel && usuario === papel) {
//       alert(`Empate`);
//     } else {
//       if (resultado === piedra && usuario === tijera || resultado === tijera && usuario === papel || resultado === papel && usuario === piedra) {
//         alert(`Has perdido`);
//         maquina += 1;
//       } else {
//         if (usuario === piedra && resultado === tijera || usuario === tijera && resultado === papel || usuario === papel && resultado === piedra) {
//           alert(`Has ganado`);
//           jugador += 1;
//         }
//       }
//     }
  
//     document.getElementById("jugador").innerHTML = `Jugador: ${jugador}`;
//     document.getElementById("maquina").innerHTML = `Máquina: ${maquina}`;

//   };