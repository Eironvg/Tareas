import React, {useState} from 'react'

const AddTareas = ({onAdd}) => {
    const [texto, setTexto] = useState('');
    const [fecha, setFecha] = useState('');
    const [terminado, setTerminado] = useState(false);
    const validar = (e)=>{
      e.preventDefault()
      if (!texto) {
        alert("debes de poner una Tarea")
        return
      }if(!fecha){
        alert("debes de poner una fecha")
        return
      }else{
      onAdd({texto, fecha, terminado})
      setTexto("")
      setFecha("")
      setTerminado(false)
      }


    }
  return (
    <form className='add-form ' onSubmit={validar} >
        <div className='form-control' >
          <label>Tarea:</label>
          <input type="text" placeholder='Ingresa tu tarea aqui' value={texto} onChange={e=>{setTexto(e.target.value)}} />
        </div>
        <div className='form-control' >
          <label>Fecha:</label>
         <input type="text" placeholder='Ingresa la fecha del evento aqui' value={fecha} onChange={(e)=> setFecha(e.target.value)} />
        </div>
        <div className='form-control  form-control-check'  >
          <label>Terminado:</label>
          <input type="checkbox" checked={terminado} value={terminado} onChange={(e)=> setTerminado(e.currentTarget.checked)} />
        </div>
        <input type="submit" value='Guardar' className='btn btn-block' />
    </form>
  )
}

export default AddTareas