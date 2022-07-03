import React, { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import Itemlist from "./ItemList"
import Menu from "./products.json"
import DotLoader from "react-spinners/DotLoader"


const promise = new Promise((res,rej) =>{
setTimeout(() =>{
    res(Menu);
}, 2000);
});



const ItemListContainer = ({greeting}) =>{

    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        promise.then((data) =>{
        setProducts(data)
        setloading(false)
        }).catch(() =>{
            console.log('todo mal')
        })
    }, []);



    const onAdd = () => {
        alert('Gracias, por tu compra')
      }


    return (
        <>
            <h2>{greeting}</h2>
            <ItemCount stock={5} onAdd={onAdd}/>
            <div className="itemsCont">
            {loading && <DotLoader color={'#9013FE'} loading={loading} size={50} cssOverride={{flex:'1', justifyContent:'center', alignItems:'center',textAlign:'center'}}  />}
            <Itemlist items= {products}/>
            </div>
        </>
    )
}

export default ItemListContainer