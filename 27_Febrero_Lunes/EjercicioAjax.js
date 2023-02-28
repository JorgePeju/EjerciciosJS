const seccion = document.querySelector('#seccion');
const boton = document.querySelector('#boton');






boton.addEventListener('click', () => {
    pintarUsuarios()

})



const consultaUsuarios = async (id) => {
    try {
        let peticion;
        if(!id){
             peticion= await fetch('https://reqres.in/api/users?page=2')
        }else{
            peticion= await fetch(`https://reqres.in/api/users/${id}`)
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
const pintarUsuarios = async () => {
    const {ok, respuesta } = await consultaUsuarios()
    const usuarios = respuesta.data

    if (usuarios) {
        usuarios.forEach((usuario) => {
            seccion.innerHTML += `<h2>${usuario.first_name}</h2>
                                    <p>${usuario.email}</p>
                                    <img src=${usuario.avatar}></img>`
        });
    }
}


const pintarBotones = async () => {
    const {ok, respuesta} = await consultaUsuarios()


};
