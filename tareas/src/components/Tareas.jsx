import React from 'react'
import Tarea from './Tarea'

const Tareas = ({tareas}) => {
    
  return (
    <div>
        {tareas.map((tarea)=>(
            <Tarea key={tarea.id} tarea={tarea} />
        ))}
    </div>
  )
}

export default Tareas