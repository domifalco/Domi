function operacionAsincronica() {
    return new Promise((resolve, reject) => {
        const exito = true;

        if (exito){
            resolve("La operacion fue exitosa")
        } else{
            reject("la operacion ha fallado")
        }
        
    });
}
//Funciona pero no se usa
//console.log(operacionAsincronica());

//Then catch

operacionAsincronica().then(response => {
   console.log("Response:", response); 
}).catch(error => {
    console.log(error);
});

//Try catch

async function ejemploAsincronico() {
    try{
    const resultado = await operacionAsincronica()
    console.log("Hola,", resultado)
    } catch (error){
        console.log("Error:", error)
    }   
}
ejemploAsincronico();