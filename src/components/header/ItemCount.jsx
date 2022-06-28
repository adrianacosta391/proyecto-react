import React, {useState} from 'react'

const ItemCount = ({ stock, initial = 0, onAdd }) => {
  
  const [count, setCount] = useState(initial)

  const add = () => {
    count < stock && setCount(count + 1)
    count >= stock && alert('No hay stock')
     
  }

  const subtract = () => {
    count > 0 && setCount(count - 1)
  }

  
  
  
    return (
        <>
            <div className='purchase'>
                <button className='add-sub' onClick={subtract}>-</button>
                <p className='text'>{count}</p>
                <button className='add-sub' onClick={add}>+</button>
        
            </div>
                <button className='btn' onClick={onAdd}>Comprar</button>
        </>
  )
}

export default ItemCount