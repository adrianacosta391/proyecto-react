import React from "react"
import ItemCount from "../../header/ItemCount";

const ItemDetail = ({item}) =>{

    const onAdd = () => {
        alert('Gracias, por tu compra')
      }
return (
  
<>
<div className="itemContDesc">
    <h2 className="itemTitleDesc">{item.title}</h2>
    <div className="flexCont"><img src={item.pictureUrl} alt="" className="itemPictureDesc" />
      <p className="itemDescDesc">{item.description}
        <span className="itemPriceDesc">{item.price}</span>
      </p>
    </div>
    <div className="flexContDos"><ItemCount stock={5} onAdd={onAdd}/></div>
</div>
</>
)
}

export default ItemDetail;