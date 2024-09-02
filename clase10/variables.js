//TIPOS DE VARIABLES
//VAR: Se puede reinicializar y reasignar.

var variable1;

variable1 = "Domi"
console.log(variable1)

variable1 = 55
console.log(variable1)

variable1 = false
console.log(variable1)

var variable1 = 1000;

//LET: Se puede reasignar, no reinicializar.
let variable2 ="Rojo";

variable2 = 111;
variable2 = "Tomas";
variable2 = false;

//CONST: No se puede reinicializar ni reasignar. Queda con un único valor.
const variable3 = "Blanco";

//Scope


//Para VAR: variables iguales en distintos niveles se sobrescribiran.
//Definicion de funcion

var x = 100
console.log(x)

 function varScope () {
//creacion de una variable
    var x = 10
    //condicional if
     if(true){
         //bloque de codigo
        var x = 20
        console.log(x)
    }
    console.log(x)
}
//block-scoped: encerrado dentro de un contexto
//global-scoped: libre dentro del archivo

//Llamado de funcion
varScope()

//Para LET: respeta el scope local, misma variable en distinto nivel no se sobrescribe.
let y = 200
console.log(y)

function varLet () {
        let y = 3
        if(true){
            let y = 4
            console.log(y)
        }
        console.log(y)
    }

//Para CONST: respeta el scope local, pero no se inicializa la variable.
const z = 300 
console.log(z)

function varConst () {
            const z = 5
            if(true){
                const z = 6
                console.log(z)
            }
            console.log(z)
        }




let llueve = true