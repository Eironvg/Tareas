import React from 'react'

const Tarea = ({tarea}) => {
  return (
    <div className='tarea'>
        <h3>{tarea.texto}</h3>
        <p>{tarea.fecha}</p>
        <p>{tarea.terminado}</p>
    </div>
  )
}

export default Tarea