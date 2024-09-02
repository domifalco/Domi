document.addEventListener('DOMContentLoaded', function(){

//Treer los elementos del HTML a traves de variables.
    const textoInput =document.querySelector ('#textoInput');
    const colorInput =document.querySelector ('#colorInput');
    const fontSizeInput =document.querySelector ('#fontSizeInput');
    const resultado =document.querySelector ('#resultado');

//Funciones
function actualizarTexto(){
    //Trae el texto del input en una variable texto, y lo pone como contenido del parrafo resultado
    const texto = textoInput.value;
    resultado.textContent = texto;
}

function actualizarColor(){
//Trae el color del input en una variable color, y lo pone como color del parrafo resultado
    const color = colorInput.value;
    resultado.style.color = color;
}

//Trae el numero de fuente del input en una variable fonrSize, y lo pone como tamanio para el parrafo resultado. Problema; en este caso en el input se va a poner solo un numero, y para la fuente se necesita la unidad de medida (px). Por eso se pone que la constante devuelva el numero del input = px.
function actualizarFontSize(){
    const fontSize = `${fontSizeInput.value}px`;
    resultado.style.fontSize = fontSize;
}

//Eventos> cuando se tenga un input, se van a correr las funciones para actualizar texto, color y tamanio de fuente.
textoInput.addEventListener('input', actualizarTexto);
colorInput.addEventListener('input', actualizarColor);
fontSizeInput.addEventListener('input', actualizarFontSize);
});



