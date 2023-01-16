import React from 'react'
import Tarea from './Tarea'

const Tareas = ({tareas,onDelate,onToggle}) => {
    
  return (
    <div>
        {tareas.map((tarea)=>(
            <Tarea key={tarea.id} tarea={tarea} onDelate={onDelate} onToggle={onToggle} />
        ))}
    </div>
  )
}

export default Tareas