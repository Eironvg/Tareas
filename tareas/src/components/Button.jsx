

const Button = ({texto,color,click}) => {

  return (
    <button onClick={click} style={{backgroundColor: color, cursor: "pointer"}} className='btn'>{texto}</button>
  )
}

export default Button