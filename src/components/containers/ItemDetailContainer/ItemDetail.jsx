import React, { useState } from "react"
import ItemCount from "../../header/ItemCount";
import {Link} from "react-router-dom"

const ItemDetail = ({item}) =>{

    const onAdd = (data) => {
        setBuy(true)
        setBuyCount(data)
      }

      const [buy, setBuy] = useState(false)
      const [buyCount, setBuyCount] = useState()



return (
  
<>
<div className="itemContDesc">
    <h2 className="itemTitleDesc">{item.title}</h2>
    <div className="flexCont"><img src={item.pictureUrl} alt="" className="itemPictureDesc" />
      <p className="itemDescDesc">{item.description}
        <span className="itemPriceDesc">{item.price}</span>
      </p>
    </div>
    
    <div className="flexContDos">{buy ? <Link to="/cart" className='btn'>FINALIZAR COMPRA</Link> : <ItemCount stock={5} onAdd={onAdd} buy={buyCount}/> }</div>
</div>
</>
)
}

export default ItemDetail;