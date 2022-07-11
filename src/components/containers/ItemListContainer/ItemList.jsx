import React from "react"
import Item from "./Item"



const ItemList = ({items}) => {
     
    return (
        <>
        {items.map((item) => {
            return <Item 
            key={item.id}
            id={item.id}
            title={item.title} 
            pictureUrl={item.pictureUrl} 
            price={item.price} 
            description={item.description}/>

    
        })}
        <img src={items.pictureUrl} alt="" />
        </>
    )
}

export default ItemList;