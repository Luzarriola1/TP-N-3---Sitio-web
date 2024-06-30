//console.log(pokemon) //Llamar al array para que se imprima

const contenedorcards = document.getElementById("contenedor_cards");


let cardsHTML="" 

for(let merchs in merch){


  /*console.log(merch[merch].name) //para que me muestre uno por uno*/

  cardsHTML+=crearCards(merchs)

}

contenedorcards.innerHTML = cardsHTML;

function crearCards(merchs) { /*Esta funcion debe estar en el bucle for*/

    let card = document.createElement('div')
    card.classList.add('card')

    //let id = document.createElement('div')    /*Los LET debemos ponerlo en la variable card*/

    let name = document.createElement('p')

    let image = document.createElement('img')


    //id.innerText = merch[merchs].id
    name.innerText = merch[merchs].name
    image.src = merch[merchs].image



    card.append(name,image)

    return card.outerHTML 


}



