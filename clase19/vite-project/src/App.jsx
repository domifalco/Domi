import { useState } from 'react'
import './App.css'

//Componente funcional
function App() {
  //Parte interna: codigo del componente. Es todo lo que va antes del return. Se puede escribir lo que quiera con js.

  //Estados para la calculadora: primer valor, segundo valor y resultado. Se define cada uno como una constante, que incluye el estado propiamente dicho y una funcion que permitira guardar un valor en el estado (modificarlo o afectarlo). El useState es un metodo de react que permite usar estados.
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleOperation = (operation) => {
    switch (operation) {
      case "suma":
        setResultado(num1 + num2)
        break;
      
      case "resta":
        setResultado(num1 - num2)
        break;

      case "multiplicar":
        setResultado(num1 * num2)
        break;

      case "dividir":
        setResultado(num1 / num2)
        break;        
          
      default:
        setResultado(0)
        break;
    }
  }
  return (
//Se renderiza. Va todo dentro de un contenedor, se escribe con html. En este caso se crean los input para los numeros 1 y 2, y los botones.
<div>
  <label>Numero 1</label>
  <input type="number" onChange={(evento) => setNum1(Number(evento.target.value))}/>

  <label>Numero 2</label>
  <input type="number" onChange={(evento) => setNum2(Number(evento.target.value))} />

  <button onClick={() => handleOperation('suma')}>Sumar</button>
  <button onClick={() => handleOperation('resta')}>Restar</button>
  <button onClick={() => handleOperation('multiplicar')}>Multiplicar</button>
  <button onClick={() => handleOperation('dividir')}>Dividir</button>

  <div>
    <label>Resultado</label>
    <br />
    <span>{resultado}</span>
  </div>
</div>
  )
}

export default App
//El archivo exporta solamente un componente (funcion App)

//export{App, count}
//Para exportar mas de un elemento se hace con export solo y con llaves. En donde se vaya a importar, el import tambien se hace con llaves.