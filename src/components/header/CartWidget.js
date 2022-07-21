import React, { useContext} from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../../App.css'
import { cartContext } from "../context/CartContext";

const CartWidget = () => {

    const { qtyProducts } = useContext(cartContext);
    const { products } = useContext(cartContext);
    
        return (
            <div className="cart-container">
                <ShoppingCartIcon sx={{ fontSize: 30 }} />
                {products.length === 0 ? <p></p> : <p className="text-cart">{qtyProducts}</p> } 
            </div>
        )
       
    
}

export default CartWidget