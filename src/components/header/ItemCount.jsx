import React, {useState} from 'react'
import Swal from 'sweetalert2'

const ItemCount = ({ stock, initial = 1, onAdd,}) => {
  
  const [count, setCount] = useState(initial)

  const add = () => {
    count < stock && setCount(count + 1)
    count >= stock && Swal.fire({
      title: 'Error!',
      text: 'No hay suficiente Stock',
      icon: 'error',
      confirmButtonText: 'ACEPTAR'
    })
     
  }

  const subtract = () => {
    count > 1 && setCount(count - 1)
  }

  const purchase = () => {
    onAdd(count);
  }


  
  
  
    return (
        <>
            <div className='purchase'>
                <button className='add-sub' onClick={subtract}>-</button>
                <p className='text'>{count}</p>
                <button className='add-sub' onClick={add}>+</button>
        
            </div>
                <button className='btn' onClick={purchase}>Comprar</button>
        </>
  )
}

export default ItemCount