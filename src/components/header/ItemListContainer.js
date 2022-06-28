import React from "react"
import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) =>{

    const onAdd = () => {
        alert('Gracias, por tu compra')
      }


    return (
        <>
            <h2>{greeting}</h2>
            <ItemCount stock={5} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer