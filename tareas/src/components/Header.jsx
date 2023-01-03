import React from 'react'
import Button from './Button'

const Header = ({tit}) => {
    const onClick = () => {
        console.log("estas precionando");
    }
  return (
    <header className='header'>
        <div>{tit}</div>
        <Button texto="Eliminar" color='red' click={onClick} />
        <Button texto="Agregar" color='green' click={onClick} />
    </header>
  )
}

export default Header