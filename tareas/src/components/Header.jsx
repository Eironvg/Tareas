import React from 'react'
import Button from './Button'

const Header = ({tit, onAdd,mostrarForm}) => {
  
  return (
    <header className='header'>
        <div>{tit}</div>
        <Button texto={mostrarForm ? 'Ocultar':'Mostar'} color={mostrarForm ? 'red': 'green '} onClick={onAdd}  />
    </header>
  )
}

export default Header