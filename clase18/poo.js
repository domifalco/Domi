let fiat = {
    marca: 'fiat',
    modelo: 'siena',
    year: '2005', //String porque no va a cambiar ni afectarse con alguna operacion.
    km:200000,   //Numero porque es incrementable o disminuible, o puede afectarse por una operacion matematica.
    color: 'rojo',
    motor: '1.6',
    combustible: 'nafta',
    gnc: true,
    precio: 5000000
}

let volkswagen = {
    marca: 'volkswagen',
    modelo: 'gol',
    year: '2013',
    km:60000,
    color: 'gris',
    motor: '1.6',
    combustible: 'nafta',
    gnc: false,
    precio: 8000000
}

//Escribir cada elemento de esta manera es muy tedioso y puede generar error.

//La forma correcta es crear un MOLDE:

//Se creara un molde para la creacion de autos.
class Auto{
    //Encendido es otra propiedad, pero se define por defecto y no por parametro. Por eso no va en el constructor.
    encendido = false;
    velocidad = 0;
    //constructor: reune las propiedades o parametros para la creacion.
    constructor(marca, modelo, year, km, color, motor, combustible, gnc, precio){
        //Se inicializan las propiedades
        this.marca = marca,
        this.modelo = modelo,
        this.year = year,
        this.km = km,
        this.color = color,
        this.motor = motor,
        this.combustible= combustible,
        this.gnc = gnc,
        this.precio = precio
    }

    //Se definen las funciones de la clase (metodos)
    arrancar(){
        console.log('El auto arranca')
    }
    acelerar(){
        console.log('El auto acelera')
    }
    encenderApagar(){
        if(this.encendido === false){
            console.log('El auto se ha encendido');
            return (this.encendido = true);
        }else{
            console.log('El auto se ha apagado');
        return (this.encendido = false);
        }
    }
    cambiarColor(color){
        this.color = color;
        console.log(`El auto ha cambiado al color ${color}`);
        return this.color;
    }
    acelerarAuto(arranque){
        if(this.encendido === true){
            this.velocidad = Number(arranque) + this.velocidad;
            console.log(`El auto aumento su velocidad en ${arranque}, va a ${this.velocidad} km/h.`);
        } else{
            this.encenderApagar();
            this.velocidad = Number(arranque) + this.velocidad;
            console.log(`El auto aumento su velocidad en ${arranque}, va a ${this.velocidad} km/h.`);
        }
    }
    frenarAuto(desacelerar){
        if(this.encendido === true){
            this.velocidad = this.velocidad - Number(desacelerar);
            console.log(`El auto disminuyo su velocidad en ${desacelerar}, va a ${this.velocidad} km/h.`);
        } else{
            this.encenderApagar();
            this.velocidad = this.velocidad - Number(desacelerar);
            console.log(`El auto disminuyo su velocidad en ${desacelerar}, va a ${this.velocidad} km/h.`);
        }
    } 
}

//Para crear un auto con el molde:

let palio = new Auto('fiat', 'palio', 2018, 50000, 'blanco','1.6','nafta', false, 9000000)

//Para visualizar el auto creado
console.log(palio);
//Para ejecutar las funciones
palio.arrancar();
palio.acelerar();
//Usando un punto se puede acceder a las funciones y a los atributos
console.log(palio.arrancar);
console.log(palio.marca);

palio.encenderApagar();
palio.cambiarColor('gris');
palio.encenderApagar();


palio.acelerarAuto(40);
palio.frenarAuto(20);
palio.frenarAuto(10);
palio.encenderApagar();


//Estado: valor de una propiedad en un momento dado. Puede ser:
// * Binario: encendido-apagado.
// * Cuantitativo: velocidad, inicia en 0.