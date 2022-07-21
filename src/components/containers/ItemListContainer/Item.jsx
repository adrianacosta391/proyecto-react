import React from "react"
import {Link} from "react-router-dom"

const Item = (item) =>{

    

return (
    
        <Link to= {`/item/${item.id}`} className="itemCont">
            <h2 className="itemTitle">{item.title}</h2>
            <img src={item.pictureUrl} alt="" className="itemPicture" />
            <h3 className="itemPrice">${item.price}</h3>
            <p className="itemDesc">{item.description}</p>
        </Link>
    
)
}

export default Item;