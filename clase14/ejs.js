//1. Acceder al tercer elemento de un array y asignarle un nuevo valor: se define el array como una variable LET. Para acceder al tercer dato se usa el [2] porque es zero based. Para editar ese elemento del array se pone array[2] = el nuevo valor (se reasigna el elemento).

let array1 = ['manzana', 'pera', 'frutilla','uva'];
console.log(array1[2]);
array1[2] = 'naranja';
console.log(array1[2]);

//2. Agregar un nuevo elemento al final de un array: se usa la funcion nativa push.

let array2 = ['huevo', 'harina','leche'];
array2.push ('azucar');
console.log(array2);

//3. Usar funcion nativa para duplicar todos los elementos de un array de numeros: 
//Definicion del array inicial.

let array3 = [1,2,3,4,5]

//Map: devuelve un array nuevo. Para eso define una variable donde a los items del array3 se los multiplique por 2 (con funcion flecha).
var duplicados = array3.map(numero => numero*2);
console.log('con map:', duplicados);

//forEach: se define un nuevo array vacio, que es el que mostrara los resultados afectados del array inicial (al inicial se le aplica el forEach pusheando la formula en el nuevo). Lectura: para cada numero del array 3, que el array duplicados (vacio) pushee ese numero multiplicado por 2.
var duplicados = []
array3.forEach(numero => {
    duplicados.push(numero*2)
});
console.log('con forEach:', duplicados);

//For:se define un nuevo array vacio, que es el que mostrara los resultados afectados del array inicial. Se usa for y se completan los parametros (posicion de inicio del contador, condicion de corte, decremento o incremento). Dentro del for se indica que el nuevo array pushee todos los elementos del array inicial multiplicados por 2. Este bucle va a correr para cada elemento del index.

var duplicados = []
for (let index = 0; index < array3.length; index++) {
    duplicados.push(array3[index]*2)
}
console.log('con for:', duplicados)


//4. Usar funcion nativa para obtener los numeros pares de un array: se define una nueva variable, y se usa filter con el array de origen para definir la condicion.

let array4 = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 , 15];

let pares = array4.filter(num => num % 2 === 0);
console.log('pares:', pares);

//Se puede hacer desde una funcion. Se define la funcion con nombre y el array al que aplica, dentro de ella se define la variable que entregara el resultado y la operacion a ejecutar. Se consolelogea el resultado y abajo se pide que se ejecute la funcion.

function buscaPar(array4){
    let resultado = array4.filter(numero => numero % 2 === 0);
    console.log('buscapar', resultado);
    return resultado; //esto si lo borro funciona igual//
}

buscaPar(array4)

//5. Acceder el segundo y cuarto elemento de un array, y combinarlos en una nueva cadena (concatenacion).

let verduras = ['lechuga', 'cebolla','zanahoria', 'acelga'];

//Forma 1: con comillas y signos +
let combinados = 'ingredientes de tarta: ' + verduras[1] + ' y ' + verduras[3];
console.log(combinados)

//Forma 2: con backsticks, mas recomendada.

let combina2 = `ingredientes de tarta: ${verduras[1]} y ${verduras[3]}`
console.log(combina2)

//Ejemplo en una funcion

function saludo(nombre){
    console.log(`Hola ${nombre}!`)
}

saludo('Domi')

//6. Usar forEach para calcular la suma total de los elementos de un array.

let numeros = [1, 2, 3, 4, 5];

//Se define una variable que actue como acumulador y empiece en 0.

var suma = 0

//Por cada numero, se le va a sumar al acumulador ese numero.

numeros.forEach(num => (suma = suma + num));
console.log('total:',suma);

//7. Escribir un script que devuelva la tabla de multiplicar del numero que es usuario ingrese, usando for. La salida debe ser un array

//Lectura de la funcion: para cualquier numero ingresado, se va a multiplicar ese numero por un index, empezando en 1 y terminando en 10. Al ejecutar la funcion con cualquier numero, va a devolver un array con la tabla del 1 al 10. Si se pone el console.log adentro de la funcion, la consola va a devolver un valor para cada vuelta que haga.

function tablaMult (numero){
    let tabla = []
    for (let i = 1; i <= 10; i++) {
        tabla.push(numero * i)
        console.log(`${i} x ${numero} es ${numero * i}`);
    }
    console.log(tabla)

}

tablaMult(2)
tablaMult(12)