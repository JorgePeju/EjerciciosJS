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
const arrayBeca=[
    { id: 2, beca:true },
    { id: 5, beca: false },
]


const id = 2

let alumno;




const getAlumnos = (id) => {
    let alumno = arrayAlumnos.find((item) => item.id == id)?.nombre
    const promise=new Promise((resolve,reject)=>{
        if (!alumno) {
            reject(`El alumno con id ${id} no existe`)
        } else {
            resolve(alumno)
        }
    })
     return promise
}





const getNotas = (id) => {
    let nota = arrayNotas.find((item) => item.id == id)?.nota
    const promise =new Promise((resolve,reject)=>{
        if (!nota) {
            reject(` ${alumno} no tiene nota`)
        } else {
            resolve(nota)
        }
    })
    return promise;
}

const getBecas=(id)=>{	
    const beca=arrayBeca.find((item)=>item.id===id)?.beca

      return new Promise((resolve,reject)=>{
        if(beca==true) resolve(beca)
         else reject(`el alumno con id ${id} no tiene beca`)

    })
  }

getAlumnos(id)
    .then((resp)=> {
        alumno=resp;
       return getNotas(id)
    })
    .then((resp)=>{
        beca=resp
        return getBecas(id)
    })
    .then((beca)=>{console.log(`${alumno} tiene una nota de ${nota} y está becado`)})
    .catch((error)=>{console.log(error)})



    // getAlumno(id)
	// .then((respuesta)=>{
	// 	nombre=respuesta
	// 	return getNota(id);
	// })
	// .then((respuesta)=>{
	// 	nota=respuesta
	// 	return getBeca(id);
	// })
	// .then((respuesta)=>{
	// 	console.log(`El alumno ${nombre} con id ${id} tiene una nota de ${nota} y ${respuesta} está becado`)
	// })
	// .catch((error)=>{console.log(error)})

    const getBeca=(id)=>{	
        const beca=arrayBecas.find((item)=>item.id===id)?.beca
          return new Promise((resolve,reject)=>{
            if(beca==true) resolve(beca)
             else reject(`el alumno con id ${id} no tiene beca`)
        })
      }