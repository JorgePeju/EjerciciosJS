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

    
    const regExpTexto = /[a-z]+/gi;
    const fecha = new Date();



    const pintarGenero = () => {
        arrayGeneros.forEach((item) => {
            let opcion = document.createElement("option");
            opcion.innerHTML += item
            campoGenero.append(opcion);
        });
    };
    
    pintarGenero();
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
        console.log("aquí1")
    });
    const validasione = () => {
        almacenazione()
        let error = "";
        const titulo = campoTitulo.value;
        const director = campoDirector.value;
        const year = campoYear.value;
        const genero = campoGenero.value;
        console.log("aquí2")
        if (isNaN(titulo) && titulo.trim().length > 0) {
            objValidar.titulo = true
        } else {
            objValidar.titulo = false
            error += '<li>¡Debes escribir un Título válido!</li>'
        }
        if (isNaN(director) && director.trim().length > 0) {
            objValidar.director = true
        } else {
            objValidar.director = false
            error += '<li>¡Debes escribir un Director válido!</li>'
        }
        if (!isNaN(year) && year.trim().length > 0 && year >= 1800 && year <= 9999) {
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
        console.log("esta dentro" + objValidar.titulo)
        return {objValidar,error}
    }
    console.log(objValidar, error)
    const almacenazione = ()=> {
        validasione({titulo,director,year,genero})
        console.log("esta fuera" + objValidar.titulo)
        const validando = arrayValidar.findIndex(item => item == false);
        const arrayValidar = Object.values(objValidar);
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
        console.log("aquí3")
    }
})