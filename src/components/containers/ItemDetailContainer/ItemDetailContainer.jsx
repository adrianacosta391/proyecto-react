import React, { useEffect, useState } from "react"
import DotLoader from "react-spinners/DotLoader"
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { useParams } from "react-router-dom"
import {db} from "../../../firebase/firebase"
import {getDoc, collection, doc} from "firebase/firestore"







const ItemDetailContainer = ({greeting}) =>{
    const {itemId} = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const productCollection = collection(db,'productos');
        const refDoc = doc(productCollection, itemId);
        getDoc(refDoc)
        .then(result => {
            const producto = {
                id: result.id,
                ...result.data(),
            }
            setProducts(producto);
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