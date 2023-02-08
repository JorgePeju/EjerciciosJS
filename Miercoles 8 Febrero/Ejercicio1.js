// 1. Número de enlaces de la página

//function enlaces1() { 
    enlacestotal = document.getElementsByTagName("a"); 

    console.log(enlacestotal)

    for( i=0; i < enlacestotal.length; i++) { 
        var enlaces = enlacestotal[i].innerHTML; 
        window.alert (enlacestotal); 
    } 
