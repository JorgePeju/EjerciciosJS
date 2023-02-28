const seccion = document.querySelector('#seccion');
const boton = document.querySelector('#boton');
const formulario = document.querySelector('#formulario');


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    buscarUsuario();
});


const consultaUsuarios = async (id) => {
    try {
        let peticion;
        if(!id){
             peticion= await fetch("https://reqres.in/api/users?page=1")
        }else{
            peticion= await fetch("https://reqres.in/api/users?page=2")
        }
        if (peticion.ok) {
            const respuesta = await peticion.json()
            return {
                ok: true,
                respuesta
            }
        } else {
            throw ({
                ok: false,
                msg: 'Error en la peticion'
            })
        }
    } catch (error) {
        return error
    }
}

// No me vale como funcion aislada por tener que poner el 2 en consultaUsuario

// const pintarUsuarios = async () => {
//     const {ok, respuesta } = await consultaUsuarios()
//     const usuarios = respuesta.data

//     if (usuarios) {
        
//         usuarios.forEach((usuario) => {
//             seccion.innerHTML += `<h2>${usuario.first_name}</h2>
//                                     <p>${usuario.email}</p>
//                                     <img src=${usuario.avatar}></img>`
//         });
//     }
// }

const pintarUsuario = async (usuario) => {
    seccion.innerHTML = `<h2>${usuario.first_name}</h2>
                            <p>${usuario.email}</p>
                            <img src=${usuario.avatar}></img>`;
};

const pintarBotones = async () => {
    try {
      const { ok, respuesta } = await consultaUsuarios();
      const totalPages = respuesta.total_pages;
  
      const botonPagina1 = document.createElement('button');
      botonPagina1.textContent = 'Página 1';
      botonPagina1.addEventListener('click', async () => {
        const { ok, respuesta } = await consultaUsuarios();
        const usuarios = respuesta.data;
        if (usuarios) {
          seccion.innerHTML = '';
          usuarios.forEach((usuario) => {
            seccion.innerHTML += `<h2>${usuario.first_name}</h2>
                                      <p>${usuario.email}</p>
                                      <img src=${usuario.avatar}></img>`;
          });
        }
      });
  
      const botonPagina2 = document.createElement('button');
      botonPagina2.textContent = 'Página 2';
      botonPagina2.addEventListener('click', async () => {
        const { ok, respuesta } = await consultaUsuarios(2);
        const usuarios = respuesta.data;
        if (usuarios) {
          seccion.innerHTML = '';
          usuarios.forEach((usuario) => {
            seccion.innerHTML += `<h2>${usuario.first_name}</h2>
                                      <p>${usuario.email}</p>
                                      <img src=${usuario.avatar}></img>`;
          });
        }
      });
  
      boton.appendChild(botonPagina1);
      boton.appendChild(botonPagina2);
    } catch (error) {
      console.log(error);
    }
  };

  const buscarUsuario = async () => {
    const email = document.querySelector('#email').value;
    const {ok, respuesta} = await consultaUsuarios();
    const usuarios = respuesta.data;

    if (usuarios) {
        const usuarioEncontrado = usuarios.find(usuario => usuario.email === email);
        if (usuarioEncontrado) {
            pintarUsuario(usuarioEncontrado);
        }
    }
};


pintarBotones()