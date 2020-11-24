import logo from './logo.svg';
import './App.css';
import sistemaSolar from "./planeta"
import Planetas from "./Planetas"
import {useState} from "react"

/* --------------------- */
/* Parte 1 del ejercicio */
/* --------------------- */

/* function App() {
  
  const planeta = sistemaSolar.map(planeta => {
    return (
      <div>
        <h1>{planeta.nombre}</h1>
    <p>{planeta.temperatura}</p>
    <p>{planeta.color}</p>
    <img src={planeta.imagen} alt="" width="100"/>
      </div>
    )
  })

  return planeta
} */

/* --------------------- */
/* Parte 2 del ejercicio */
/* --------------------- */

/* function App() {
  
  let nuevoArray = []

  let [array, setArray] = useState(sistemaSolar)
  
  function eliminar(){
    /* Manera de hacer el punto 3 pero guardando lo "eliminado" */
    /* nuevoArray = array.splice(0,array.length-1) */ 
    
    /* Manera de hacer el punto 3 guardando únicamente lo no borrado/
    for (let i = 0; i < array.length-1; i++) {   
      nuevoArray.push(array[i])
    }
    setArray(nuevoArray)
  }

  const planetas = array.map(planeta => {
    return <Planetas nombre={planeta.nombre} temperatura={planeta.temperatura} color={planeta.color} imagen={planeta.imagen}/>
  })

  return (
    <>
    {planetas}
    <button onClick={eliminar}>Eliminar</button>
    </>
    );

} */

/* --------------------- */
/* Parte 4 del ejercicio */
/* --------------------- */


 function App() {
  
  let nuevoArray = []

  let [array, setArray] = useState(sistemaSolar)
  
  function eliminar(parametro){
    
   for (let i = 0; i < array.length; i++) {
     if (array[i].nombre != parametro) {
      nuevoArray.push(array[i])
     }
   }
   setArray(nuevoArray)
  }

  const planetas = array.map(planeta => {
    return (<>
    <Planetas nombre={planeta.nombre} temperatura={planeta.temperatura} color={planeta.color} imagen={planeta.imagen}/>
    <button onClick={() => eliminar(planeta.nombre)}>Eliminar</button>
    </>) 
  
  })

  return planetas;

} 
export default App;
