import React, { useState, useContext} from 'react'
import { cartContext } from "../context/CartContext";
import { db } from "../../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import {Link} from "react-router-dom"

const Sales = () => {
const { products } = useContext(cartContext);
const { clear } = useContext(cartContext);
const total = products.reduce((acc, el) => acc + el.price * el.qty, 0)
const [name, setName] = useState('');
const [number, setNumber] = useState('');
const [mail, setMail] = useState('');
const [idSale, setIdSale] = useState([]);





     const checkout = () => { 
        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection,{
            nombre: name,
            telefono: number,
            email: mail,
            items: products,
            date: serverTimestamp(),
            total: total,
        })
        .then((result) =>{
                setIdSale(result.id)
            
        })
        
        
        
    }


  return (
<div>
    {idSale.length === 0 
    ? <div className="cartShowCheckout">
    <p className="cartShowText">Rellena tus datos para finalizar la compra</p>
    <p className="cartShowText">Nombre:</p>
    <input className='inputChekout' onChange={e => setName(e.target.value)} type="text" />
    <p className="cartShowText">Telefono:</p>
    <input className='inputChekout'onChange={e => setNumber(e.target.value)} type="text" />
    <p className="cartShowText">E-mail:</p>
    <input className='inputChekout' onChange={e => setMail(e.target.value)} type="text" />
    <button className='btn' onClick={checkout}>COMPRAR</button>
</div>
: 
<div>
    <div>
        <p className="cartShowText"> Tu compra se ha realizado con exito</p>
        <p className="itemDescDesc"> el ID de tu compra es: {idSale}</p>
        <Link className="link" to="/"> <button className="btn" onClick={clear}>VOLVER</button></Link> 
    </div>

</div>
}
</div>     
        
        
  )
}

export default Sales