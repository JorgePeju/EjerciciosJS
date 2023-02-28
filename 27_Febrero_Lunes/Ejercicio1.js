//Escribe la fecha y hora actual. Deberá tener este formato: Hoy es lunes, 27 de Febrero de 2023 y son las 12:00 horas.



// const fechaHoy = () => {


//     // se resuelve con totallocaldatestring

//     const hoy = new Date()

//    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
//    const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


//    diasSemana.forEach(item=> {

//         if (hoy.getDate() == diasSemana[i]) {
            
//         }
//    });

//     alert(`Hoy es  ${hoy.getDay()}, dia ${hoy.getDate()} de ${hoy.getMonth()} de ${hoy.getFullYear()} y son las ${hoy.getHours()}:${hoy.getMinutes()} horas
//     `)

// };

// fechaHoy()




function fecha() {
    let dia = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formatoBueno = dia.toLocaleDateString("es-ES", options)
    dia.setHours(12, 00);
    var hora = dia.getHours()
    var minutos = dia.getMinutes()
    console.log("Hoy es " + formatoBueno + " y son las " + hora + ":" + minutos + minutos);
}
fecha()