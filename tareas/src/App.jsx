import Header from "./components/Header"
import Tareas from "./components/Tareas"
import { useState } from "react"

function App() {
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
        terminado: true
    },
    {
        id:3,
        texto: "ir al super",
        fecha: "31 de noviembre de 2022",
        terminado: false
    }
])

  return (
    <div className="container">
      <Header tit="encabezado" />
      <Tareas tareas={tareas} />
    </div>
  )
}

export default App
