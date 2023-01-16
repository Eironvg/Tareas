

const Button = ({texto,color,onClick}) => {

  return (
    <button style={{backgroundColor: color, cursor: "pointer"}} className='btn' onClick={onClick}  >{texto}</button>
  )
}

export default Button