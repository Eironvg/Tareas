import Header from "./components/Header"
import Tareas from "./components/Tareas"
import { useState } from "react"
import AddTareas from "./components/AddTareas"

function App() {
  const [mostrarForm, setMostrarForm] = useState(false)
  const [tareas, setTareas] = useState([
    {
        id:1,
        texto: "ir al cine",
        fecha: "31 de noviembre de 2022",
        terminado: false
    },
    {
        id:2,
        texto: "ir por taquitos al pastor",
        fecha: "31 de noviembre de 2022",
        terminado: false
    },
    {
        id:3,
        texto: "ir al super",
        fecha: "31 de noviembre de 2022",
        terminado: false
    }
])

// Borrar Tarea

const borrarTarea = (id) =>{
  setTareas(tareas.filter((tarea)=>tarea.id !== id))
}
//cambiar el estatus de tarea
const marcarTarea = (id) => {
  setTareas(tareas.map((tarea)=>tarea.id === id ? {...tarea, terminado : !tarea.terminado} : tarea))
}
//Agregar la Tare
const agregarTa = (tarea) => {
  const id = Math.floor(Math.random()*10000) +1
  const nuevaTarea = {id, ...tarea}
  setTareas([...tareas, nuevaTarea])
}

  return (
    <div className="container">
      <Header tit="encabezado" onAdd={()=>setMostrarForm(!mostrarForm)} mostrarForm={mostrarForm} />
      {mostrarForm && <AddTareas onAdd={agregarTa} />}
      {tareas.length > 0 ? <Tareas tareas={tareas} onDelate={borrarTarea} onToggle={marcarTarea} /> : 'no hay tareas'}
      
    </div>
  )
}

export default App
