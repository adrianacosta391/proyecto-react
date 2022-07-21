import React, { useState, useContext } from "react"
import ItemCount from "../../header/ItemCount";
import {Link} from "react-router-dom"
import { cartContext } from "../../context/CartContext";

const ItemDetail = ({item}) =>{
  const {addProducts} = useContext(cartContext);
  const [buy, setBuy] = useState(false)
    
  
  const onAdd = (count) => {
        setBuy(true)
        addProducts({...item, qty:count});
        
      }

      
      



return (
  
<>
<div className="itemContDesc">
    <h2 className="itemTitleDesc">{item.title}</h2>
    <div className="flexCont"><img src={item.pictureUrl} alt="" className="itemPictureDesc" />
      <p className="itemDescDesc">{item.description}
        <span className="itemPriceDesc">${item.price}</span>
      </p>
    </div>
    
    <div className="flexContDos">{buy ? <Link to="/cart" className='btn'>FINALIZAR COMPRA</Link> : <ItemCount stock={5} onAdd={onAdd}/> }</div>
</div>
</>
)
}

export default ItemDetail;