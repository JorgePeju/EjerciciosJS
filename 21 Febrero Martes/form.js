const formulario=document.querySelector('#formulario');
	const campoNombre=document.querySelector('#nombre');
	const campoApellido=document.querySelector('#apellido');
	const campoCorreo=document.querySelector('#correo');
    const listaErrores=document.querySelector("#listaErrores");

  let objValidar={
		nombre:false,
		apellido:false,
		correo:false
	}


const arrayUsuarios= [];

  formulario.addEventListener('submit',(ev)=>{
		ev.preventDefault()
		validar();
	});


  const validar=()=>{
        listaErrores.innerHTML="";
        let errores ="";

		const nombre=campoNombre.value;
		const apellido=campoApellido.value;
		const correo=campoCorreo.value

		if(isNaN(nombre) && nombre.trim().length>0){
			objValidar.nombre=true
		}else{
			objValidar.nombre=false
            errores += `<li>`
		}

    if(isNaN(apellido) && apellido.trim().length>0){
			objValidar.apellido=true
		}else{
			objValidar.apellido=false
            errores +=
		}

		if(isNaN(correo) && correo.trim().length>0){
			objValidar.correo=true
		}else{
			objValidar.correo=false
            errores += 
		}

		const arrayValidar=Object.values(objValidar)


		const valida=arrayValidar.findIndex(item=>item==false);

		if(valida === -1){
			//Todo a ido bien
            arrayUsuarios.push({
                nombre: nombre,
                apellido: apellido,
                correo: correo,
            })
		}  else {




        }
        

	

	}