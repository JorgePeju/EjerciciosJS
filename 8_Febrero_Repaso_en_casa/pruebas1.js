var parrafos;
function ejecutar() {
    parrafos = document.getElementsByTagName("p");
    for (let i = 0; i < parrafos.length; i++) {
        let parrafo = parrafos[i].innerHTML;
        alert(parrafo);
    }
} 