import React, { useContext} from "react";
import { cartContext } from "../context/CartContext";
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom"



const Cart = () =>{

    const { products } = useContext(cartContext);
    const { clear } = useContext(cartContext);
    const { removeProducts } = useContext(cartContext);
    const total = products.reduce((acc, el) => acc + el.price * el.qty, 0)

    
    return (
        <div>{products.length === 0 
            ?
            <> 
                <p className="textDos">No hay productos dentro del carrito</p> 
                <Link className="link" to="/"> <button className="btn">AGREGAR PRODUCTOS</button></Link> 
            </>
            : <div> 
                    
            {products.map(p => 
                <>
                <div className="cartShowContainer" >
                    <p className="cartShowText">Producto:</p>
                    <h2 className="cartShowTitle">{p.title}</h2>
                    <p className="cartShowText">Precio:</p>
                    <p className="cartShowQty">${p.price * p.qty}</p>
                    <p className="cartShowText">Cantidad:</p>
                    <p className="cartShowQty">{p.qty}</p>
                    <button className="icon" onClick={() => removeProducts(p.id)} ><DeleteIcon  /></button>
                </div>
                </>
            )}
                    <div className="cartShowContainer">
                    <h3 className="cartShowText">TOTAL: <span className="cartShowQty" >${total}</span></h3>
                    <button className='btn'>Finalizar Compra</button>
                    <button className='btn' onClick={clear}>Limpiar Carrito</button>
                    </div>

            </div> }
        </div>
    )
    
}

export default Cart;