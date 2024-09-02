//Para probar los oepradores usar un Git Bash y $ node index

//OPERADORES LOGICOS
let llueve = false
let amigos = true
let familia = true
let pareja = false

if (llueve){
    console.log("Mojado")
}

if(!llueve){
    console.log("Seco")
}

// if(!llueve && (amigos && (familia|| pareja))){
//     console.log("Evento confirmado")
// } else {
//     console.log("Evento cancelado")
// }

if(!llueve && (amigos && (familia|| pareja))){
    console.log("Evento confirmado al exterior")
} else  if (llueve && (amigos && (familia|| pareja)))
{   console.log("Evento confirmado en interior")
} else{
    console.log("Evento cancelado")
}

//OPERADORES DE COMPARACION
// == solo compara valores
console.log(2==2)
console.log(2=="2")
// === compara valores y tipo de dato
console.log(2===2)
console.log(2==="2")
// != solo compara valores
console.log(2!=2)
console.log(2!="2")
// !== compara valores y tipo de dato
console.log(2!==2)
console.log (2!=="2")
//Mayor a (>)
console.log(9>2)
console.log(2>9)
//Menor a (<)
console.log(9<2)
console.log(2<9)
//Mayor o igual a (>=)
console.log(9>=2)
console.log(2>=9)
//Menor o igual a (<=)
console.log(9<=2)
console.log(2<=9)

let num = 10
if (num >= 6){
    console.log("Aprueba")
} else{
    console.log("No aprueba")
}
//Para asegurar que el dato que entra sea un numero
let numero = "hola"
if (typeof numero === Number){
    if (num >= 6){
        console.log("Aprueba")
        }   else{
     console.log("No aprueba")
        }
} else{
    console.log("ingrese un dato numerico")
}

//OPERADORES ARITMETICOS
console.log (2+2)
console.log (10-5)
console.log (3*3)
console.log (20/2)

//if ternario
num >= 6
? console.log("Aprueba")  
: console.log("No Aprueba")

//Switch
let dia = 1

switch (dia) {
    case 1:
    console.log ("Lunes")
        break;
    
    case 2:
    console.log ("Martes")
        break;

    case 3:
    console.log ("Miercoles")
        break;

    default: 
    console.log("Error")
        break;
}


//Funciones nativas

//Lenght
let frutas = ["manzana", "frutilla", "pera", "banana"]
if(frutas.length > 0){
console.log("frutas:", frutas.length),
console.log(frutas[3])
}


var password = "dominica"

if(password.length > 6 && password.length < 10){
    console.log ("password ok")
} else{
    console.log ("password is too long")
}

//Push
let autos =['fiat']
console.log(autos);
console.log("Total autos:", autos.push('chevrolet', 'citroen'));
console.log(autos);

 //Pop
console.log("Ultimo auto:", autos.pop());
console.log(autos);

//Splice
 console.log("Auto eliminado:", autos.splice(0,1));
console.log(autos);


 //Unshift
console.log("Nuevo total autos:", autos.unshift('BMW'));
console.log(autos);

 //Shift
 console.log("Nuevo total autos:", autos.shift());
console.log(autos);

 //indexOf
console.log(autos.indexOf ("chevrolet"))
console.log(autos[1])