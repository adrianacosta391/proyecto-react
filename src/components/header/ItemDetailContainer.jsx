import React, { useEffect, useState } from "react"
import Menu from "./products.json"
import DotLoader from "react-spinners/DotLoader"
import ItemDetail from "./ItemDetail";




const promise = new Promise((res,rej) =>{
    setTimeout(() =>{
        res(Menu);
    }, 2000);
    });


const ItemDetailContainer = ({greeting}) =>{

    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        promise.then((data) =>{
        const getData = data[0]
        setProducts(getData)
        setloading(false)
        }).catch(() =>{
            console.log('todo mal')
        })
    }, []);

    return (
        <>
            <h2 className="textDos">{greeting}</h2>
            <div className="flexCont">{loading ? <DotLoader color={'#9013FE'} loading={loading} size={50} cssOverride={{flex:'1', justifyContent:'center', alignItems:'center',textAlign:'center'}}  /> :
            <ItemDetail item= {products}/>}</div>
            
            
            
        </>
    )
}



    



export default ItemDetailContainer;