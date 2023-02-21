function ejecutar() { 
    var texto = prompt(" Escriba el texto del párrafo: "); 
    var etiqueta = document.createElement("p"); 
    var contenido = document.createTextNode (texto); 
    etiqueta.appendChild (contenido); 
    document.body.appendChild(etiqueta);
}