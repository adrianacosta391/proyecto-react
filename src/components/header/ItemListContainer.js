import React, { useEffect, useState } from "react"
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



    


    return (
        <>
            <h2 className="textDos">{greeting}</h2>
            <div className="itemsCont">
            {loading && <DotLoader color={'#9013FE'} loading={loading} size={50} cssOverride={{flex:'1', justifyContent:'center', alignItems:'center',textAlign:'center'}}  />}
            <Itemlist items= {products}/>
            </div>
        </>
    )
}

export default ItemListContainer