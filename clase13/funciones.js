//Funcion Nombrada: primero se declara con parametros y despues se usa
function suma (a, b){
    return a + b;
}

console.log(suma(2,4))

//Funcion anonima: no tiene nombre, usa el de la variable.

let resta = function (a,b){
    return a - b;
}
console.log(resta (6,2))

//Version 1: sin return
const multiplicar = (a,b) => a * b;
console.log(multiplicar(2,8));

//Version 2: con return
const division = (a,b) => {
    return a / b;
};
console.log(division(10,2))
