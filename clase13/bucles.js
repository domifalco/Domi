//Bucle For
let array = ["manzana", "banana", "naranja","mandarina", "pera", "frutilla","mango"]

//Incremento
for (let index = 0; index < array.length; index++) {
 const element = array[index];
 console.log(element,index)
    }

//Decremento
for (let index = array.length -1; index >=0 ; index--) {
    const element = array[index];
    console.log(element,index)   
}


//Bucle While
 let numero = 0
while (numero < 20) {
 console.log(numero++)
}

//Bucle forEach
let mascotas = ['perro','gato','conejo','cobayo']
mascotas.forEach(item => console.log(item))

//Bucle map: forma 1
let numbers = [1,2,3,4,5]
let resultado1 = numbers.map(numero => numero*2)
console.log(resultado1)

//Bucle map: forma 2
let resultado2 = numbers.map(function(numero){
return numero * 2
})
console.log(resultado2)

//Filter
let numerosRandom =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

let numerosPares = numerosRandom.filter(num => num % 2 === 0);
console.log(numerosPares)

//Find
let numerosPares2 = numerosRandom.find(num => num % 2 === 0);
console.log(numerosPares2)