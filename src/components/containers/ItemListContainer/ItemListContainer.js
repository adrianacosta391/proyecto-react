import React, { useEffect, useState } from "react"
import Itemlist from "./ItemList"
import DotLoader from "react-spinners/DotLoader"
import { useParams } from "react-router-dom"
import { db } from "../../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore"




const ItemListContainer = ({greeting}) =>{

    const {categoryName} = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(true)
    

       

    useEffect(() => {
        
        const productCollection = collection(db,'productos');
        const q = query(productCollection, where("category", "==", `${categoryName}`));
        
        
      
        
        getDocs(categoryName ? q : productCollection)
        .then(result => {
          const list = result.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data(),
            }
            })

            setProducts(list);
            setloading(false);
            
            })

    }, [categoryName]);

    


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