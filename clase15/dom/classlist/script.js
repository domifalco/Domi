//Funcion que maneja a otras funciones
//DOMContentLoeaded indica que empezara a funcionar cuando el contendio se haya cargado en el DOM

document.addEventListener('DOMContentLoaded',function (){
    //Se traen los elementos del HTML con selectores segun sus clases, y se los define como variable. Recordar que el querySelector trae solo el priemr valor detectado para cada clase.
    const titulo = document.querySelector('.titulo');
    const parrafo = document.querySelector('.texto');
    const input = document.querySelector('.input-texto');

    //Se definen funciones que modificaran las clases para la variable parrafo, es decir para el primer elemento con clase "texto".
    function agregarBold () {
        parrafo.classList.add('black');
        
    }
    function quitarBold(){
        parrafo.classList.remove('black');
    }

    

    //Se definen escuchadores de eventos para aplicar los estilos. Cuando el mouse se posicione sobre el primer elemento con la clase texto, va a agregarse la clase .black y cambiara el estilo. Cuando se saque el mouse, la clase se elimina y vuelve al estilo anterior.
    parrafo.addEventListener('mouseover', agregarBold);
    parrafo.addEventListener('mouseout', quitarBold);

    
    //Ejemplo definiendo la funcion dentro del Event Listener. La funcion toggle hace que al clickear una vez se agregue la clase, y al clickear de nuevo se elimine. Asi no hace falta definir dos funciones, una add y otra remove.

    titulo.addEventListener("click", () => {
        titulo.classList.toggle('red')
    })


    //Ejemplo para el input: se plantea una funcion que actualice el texto de parrafo segun lo que se ingrese en el input (text content = input.value). Luego se pone un event listener que hace que, cuando se escriba en el input, corra la funcion y modifique el parrafo de arriba.

    function actualizarTexto() {
        parrafo.textContent = input.value;
    }

    input.addEventListener('input', actualizarTexto)
})