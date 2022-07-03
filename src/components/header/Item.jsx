import React from "react"

const Item = (item) =>{

return (
<>
<div className="itemCont">
<h2 className="itemTitle">{item.title}</h2>
<img src={item.pictureUrl} alt="" className="itemPicture" />
<h3 className="itemPrice">{item.price}</h3>
<p className="itemDesc">{item.description}</p>
</div>
</>
)
}

export default Item;