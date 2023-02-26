const arrayAlumnos = [
    { id: 1, nombre: 'Pepe' },
    { id: 2, nombre: 'Ana' },
    { id: 3, nombre: 'Juan' },
    { id: 4, nombre: 'Pepi' },
    { id: 5, nombre: 'bea' }
];
const arrayNotas = [
    { id: 1, nota: 8 },
    { id: 2, nota: 7 },
    { id: 5, nota: 9 },
];
const arrayBeca = [
    { id: 2, beca: 1 },
    { id: 5, beca: -1 },
]


const id = 2;

const getAlumnos = async (id) => {
    let alumno = arrayAlumnos.find((item) => item.id == id)

    if (!alumno) throw (`El alumno con id ${id} no existe`)
    else return (alumno)

}


const getNotas = async (id, nombre) => {
    let nota = arrayNotas.find((item) => item.id == id)

    if (!nota) throw (` ${nombre} no tiene nota`)
    else return (nota)

}

const getBeca = async (id, nombre, nota)=> {
    let beca = arrayBeca.find((item) => item.id == id)

    if (beca===1) return (beca)
    else throw (`${nombre} tiene una nota de ${nota} y no entregó los papeles de la beca`)
    
}


const getDatos = async (id) => {
    try {
        const {nombre} = await getAlumnos(id);
        const {nota} = await getNotas(id,nombre);
        const {beca} = await getBeca(id, nombre, nota);

        if (beca===1)  return `${nombre}, tiene una nota de ${nota} y tiene beca`;
        else throw (`${nombre} tiene una nota de ${nota} y no le han concedido la beca`)
       
  
    } catch (error) {
        console.log(error)
    }

}

getDatos(id);

   


    
    
    
    