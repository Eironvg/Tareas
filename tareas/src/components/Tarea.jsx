
import {FaTimes} from 'react-icons/fa'


const Tarea = ({tarea,onDelate,onToggle}) => {
  return (
    <div className={`tarea ${tarea.terminado ? 'terminada': ''}`} onDoubleClick={()=>onToggle(tarea.id)} >
        <h3>{tarea.texto} <FaTimes style={{cursor:'pointer',color:'red'}} onClick={()=>onDelate(tarea.id)} /></h3>
        <p>{tarea.fecha}</p>
        <p>{tarea.terminado}</p>
        
    </div>
  )
}

export default Tarea