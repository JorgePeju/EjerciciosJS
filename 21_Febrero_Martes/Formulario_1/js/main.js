// 1. Crear una clase Película con los atributos Título, Director, Año y Genero
// 2. Solicita los datos a través de un formulario, validar los campos Año que tenga 4 cifras y se encuentre entre el año 1800 y la fecha actual Los géneros serán terror, acción, comedia,romantica
// 3. Almacenar las peliculas en un array
// 4. Mostrar todas las películas en una tabla

// primero las variables que vamos a necesitar

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('#formulario');
    const campoTitulo = document.querySelector('#titulo');
    const campoDirector = document.querySelector('#director');
    const campoYear = document.querySelector('#year');
    const campoGenero = document.querySelector('#genero');
    const listaErrores = document.querySelector('#listaErrores');
    const tablaResultados = document.querySelector("#tbody")

    // Creamos los dos arrays que necesitaremos para guardar las películas y el otro para validar que los datos sean los correctos.

    // objValidar parte de false y será luego en los condicionales donde cambiaremos su valor a true
    
    
  

    const arrayPeliculas = [];

    const arrayGeneros = ["------", "Terror", "Acción", "Comedia", "Romántica"];

    let objValidar = {
        titulo: false,
        director: false,
        year: false,
        genero: false,
    };


    const pintarGenero = () => {

        arrayGeneros.forEach((item) => {
            let opcion = document.createElement("option");
            opcion.innerHTML += item
            campoGenero.append(opcion);
        });

    };

    

    const pintarTabla = () => {
        tablaResultados.innerHTML = "";

        arrayPeliculas.forEach((pelicula)=>{
            const elementoPelicula = document.createElement("tr");
            elementoPelicula.innerHTML += `<td>${pelicula.titulo}</td><td>${pelicula.director}</td><td>${pelicula.year}</td><td>${pelicula.genero}</td>`;
            tablaResultados.appendChild(elementoPelicula);
        });
    }

    formulario.addEventListener('submit', (ev) => {
        ev.preventDefault()
        validasione();
        pintarTabla();
    });

    const validasione = () => {

        listaErrores.innerHTML = "";
        let error = "";
        const titulo = campoTitulo.value;
        const director = campoDirector.value;
        const year = campoYear.value;
        const genero = campoGenero.value;
        const regExpDirector = /[a-zÁ-ÿ]+/gi ;
        const regExpTitulo = /[a-zÁ-ÿ0-9]/gi ;
        const regExpYear = /[0-9]{4}/g ;

        

        if (regExpTitulo.test(titulo)) {
            objValidar.titulo = true
        } else {
            objValidar.titulo = false
            error += '<li>¡Debes escribir un Título válido!</li>'
        }
        if (regExpDirector.test(director)) {
            objValidar.director = true
        } else {
            objValidar.director = false
            error += '<li>¡Debes escribir un Director válido!</li>'
        }

        if (regExpYear.test(year) && year >= 1800 && year <= 9999) {
            objValidar.year = true
        } else {
            objValidar.year = false
            error +='<li>¡Debes escribir un Año válido que conste de 4 cifras y superior a 1800!<li>'
        }

        if (genero != "------") {
            objValidar.genero = true
        } else {
            objValidar.genero = false
            error +='<li>¡Debes introducir un Género!<li>'
        }

        const arrayValidar = Object.values(objValidar)
        const validando = arrayValidar.findIndex(item => item == false);

        if (validando === -1) {

            arrayPeliculas.push({
                titulo: titulo,
                director: director,
                year: year,
                genero: genero,
            })

        } else {
            listaErrores.innerHTML = error
        }

    }


    // let arrayPeliculasStorage= JSON.parse(localStorage.getItem('tabla')) || [];
    // const peliculaAdd = () => {

    //     const peliculaAñadida = arrayPeliculas.find((item) => { return item.id == id });
    //     arrayPeliculasStorage.push(peliculaAñadida);

    //     setLocal()
    // }

    // const peliculaDel = (id) => {

    //     const indiceELemento=arrayPeliculasStorage.findIndex((item)=>item.id==id)
    //     console.log(indiceELemento)
    //     if(indiceELemento!=-1){
    //         arrayPeliculasStorage.splice(indiceELemento,1)
    //         setLocal()
    //     }
       
    // }

    // const setLocal = () => {
    //     localStorage.setItem("tabla", JSON.stringify(arrayPeliculasStorage))
    // }

    // const getLocal = () => {
    //     return JSON.parse(localStorage.getItem("tabla")) || [];
    // }

    const init = ()=> {

        pintarGenero();

    }


    init();

})