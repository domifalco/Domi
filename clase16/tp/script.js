document.getElementById('card-form').addEventListener('submit', function (event) {
  //Un form tiene como comportamiento default al enviar guardar la info y refrescar la pagina. Al refrescar se va a borrar la card, entonces se pone este prevent default para que al submitear no se borre todo.

 event.preventDefault();

 //Para traer los datos del formulario:
 const title = document.getElementById ('card-title').value;
 const description = document.getElementById ('card-description').value;
 const imageUrl = document.getElementById ('card-image').value || 'https://picsum.photos/200';
 const bgColor = document.getElementById ('card-bg-color').value;
 const borderColor = document.getElementById ('card-border-color').value;

 //Para mostrar por consola los valores del form:
 console.log({
    title: title,
    description: description,
    imageUrl: imageUrl,
    bgColor: bgColor,
    borderColor: borderColor,
 })

 //Para crear la nueva card se trae el div donde iran las cards:
 const cardContainer = document.getElementById ('cards-container');
 //Se crea la card con un div
 const newCard = document.createElement('div');
 //Se le agrega una clase y los colores
 newCard.className = "card";
 newCard.style.backgroundColor = bgColor;
 newCard.style.borderColor = borderColor;

 //Maquetar la card, trayendo la imagen y los textos.
 newCard.innerHTML = `
    <img src = "${imageUrl}" alt = "Card image">
    <div class = "card-content">
        <p> ${title}</p>
        <p>${description}</p>
    </div>
 `;

 //Agregar la nueva card al contenedor
 cardContainer.append(newCard)

 //Limpiar campos del formulario 
 document.getElementById('card-form').reset()

})