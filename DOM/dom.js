//document.querySelector: trae el primer elemento coincidente que encuentra. Puede usarse para elementos, clases, ids, tags.

let h1 =console.log(document.querySelector("h1"));
let subtitulos =console.log(document.querySelector("#subtitulo"));
let parrafos =console.log(document.querySelector(".miClase"));


//document.querySelectorAll: trae todos los valores coincidentes que encuentra. Tambien se puede usar para elementos, clases, ids y tags. Se usa una funcion forEach donde se hace pasar a todos los elementos por consola.

let elementoh1 = document.querySelectorAll("h1");
console.log(elementoh1);

function nodeList() {
    elementoh1.forEach(elemento => {
        console.log(elemento.innerHTML);
    });
};

nodeList();

//Ottras formas de buscar cada elemento (no se usan los operadores . y #).
document.getElementsByTagName("div");
document.getElementsByClassName("miClase");
document.getElementById("miClase");


//Se pueden buscar elementos y editar su estilo desde js
let titulo = document.querySelector("h1");
titulo.style.color = "red";


let parrafo = document.querySelector(".miClase");
parrafo.style.color = "blue";


const hoverTarget = document.querySelector(".hover-target");
const paragraph = document.querySelector(".initial-style");

hoverTarget.addEventListener('mouseenter', () =>{
    paragraph.style.color = "white"
    paragraph.style.backgroundColor = "black"
    paragraph.style.fontWeight = "bold";
    paragraph.style.fontSize = "24px";
    paragraph.style.padding = "10px";
    paragraph.style.borderRadius = "5 px";
    paragraph.style.transform = "scale(1.1)";
})

hoverTarget.addEventListener('mouseleave', () =>{
    paragraph.style.color = ""
    paragraph.style.backgroundColor = ""
    paragraph.style.fontWeight = "";
    paragraph.style.fontSize = "";
    paragraph.style.padding = "";
    paragraph.style.borderRadius = "";
    paragraph.style.transform = "";
})