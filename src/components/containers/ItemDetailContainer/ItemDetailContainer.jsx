import React, { useEffect, useState } from "react"
import Menu from "../../header/products.json"
import DotLoader from "react-spinners/DotLoader"
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { useParams } from "react-router-dom"




const promise = new Promise((res,rej) =>{
    setTimeout(() =>{
        res(Menu);
    }, 2000);
    });


const ItemDetailContainer = ({greeting}) =>{
    const {itemId} = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        promise.then((data) =>{
        const getData = data.find(product => product.id === itemId)
        setProducts(getData)
        setloading(false)
        }).catch(() =>{
            console.log('todo mal')
        })
    }, [itemId]);

    return (
        <>
            <h2 className="textDos">{greeting}</h2>
            <div className="flexCont">{loading ? <DotLoader color={'#9013FE'} loading={loading} size={50} cssOverride={{flex:'1', justifyContent:'center', alignItems:'center',textAlign:'center'}}  /> :
            <ItemDetail item={products}/>}</div>
            
            
            
        </>
    )
}



    



export default ItemDetailContainer;