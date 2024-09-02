const fetch = (...args) => 
    import("node-fetch").then(({default:fetch}) => fetch(...args));

//Esta funcion hace un llamado a un servidor a traves de fetch. por lo tanto es asincronica.
//Async va antes de la funcion
const fetchCharacters = async function (url) {
    try{
        //peticion get al servidor
        let response = await fetch(url);
        return response.json(); //Para transformar los datos de un json a un ojeto de js.
    } catch(error){
        console.error(error);
    }
    
}

const initialUrl = "https://rickandmortyapi.com/api/character"

//Caso de uso
async function ejemplo() {
    try{
        const resultado = await fetchCharacters(initialUrl);
        console.log(resultado.results.filter(character => character.name.includes("Rick")))
    } catch(error){
    console.log(error)
}
}

ejemplo();