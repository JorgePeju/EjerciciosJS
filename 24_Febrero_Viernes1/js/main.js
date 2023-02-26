document.addEventListener("DOMContentLoaded", () => {

    
    document.addEventListener("click", ({ target }) => {
        if (target.classList.contains("mostrarfoto")) {
            target.parentElement;
            pintarCard()
        }
    })
   
})


const urlBase = "./imagenes";


const pintarCard = () => {

    const cardFotos = document.querySelector("#imagenes");
    cardFotos.innerHTML = ""

    const arrayCards = [
        ["viajes-1.jpg", "Viaje Uno"],
        ["viajes-2.jpg", "Viaje Dos"],        
        ["viajes-3.jpg", "Viaje Tres"],  
        ["viajes-4.jpg", "Viaje Cuatro"],
        ["viajes-5.jpg", "Viaje Cinco"],        
        ["viajes-6.jpg", "Viaje Seis"], 
        ["viajes-7.jpg", "Viaje Siete"], 
     ];

     arrayCards.forEach((item) => {
       const card = document.createElement("ARTICLE");
       card.classList.add("#imagenes")
       const cardImg = document.createElement("IMG");
       cardImg.src = `${urlBase}/viajes/${item[0]}`
       cardImg.alt = `${urlBase}/viajes/${item[1]}`

       cardImg.classList.add("#imagenes")
       const cardh3 = document.createElement("H2");
       cardh3.textContent = item[1];

       card.append(cardh3, cardImg);


       cardFotos.append(card);
   })

   cardFotos.append(card);

}