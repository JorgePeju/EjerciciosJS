// Validar : pepe@pepe.es
// pe.pe_pepe-23@pepe.es
// pe.pe_pepe-23@pe_p-e.es
// pe.pe_pepe-23@pepe.es.com


function correo1() {

    const pepe1 = "pepe@pepe.es";


    let regExp = /[a-z]+@{1}[a-z]+[.]{1}[a-z]{2,3}/gi;

    console.log(regExp.test(pepe1));
}

correo1()


function correo2() {

    const pepe2 = "pe.pe_pepe-23@pepe.es"

    let regExp = /[\W\w]+@{1}[a-z]+[.]?[a-z]{2,3}/gi

    console.log(regExp.test(pepe2));

    //[a-z0-9\._\-]+@[a-z0-9\-]+(\.[a-zA-Z]{2,}{1,2})

}


correo2()



function correo4() {

    const pepe4 = "pe.pe_pepe-23@pepe.es.com"

    let regExp= /[a-z0-9\._\-]+@[_a-z0-9\-]+(\.[a-z]{2,}){1,2}/gm

    // tildes y acentos raros
    // ([a-zÁ-ÿ\-]\s*)*+/i

    //

    console.log(regExp.test(pepe4))
}



correo4()



