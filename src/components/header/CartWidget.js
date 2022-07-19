import React, { useContext} from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../../App.css'
import { cartContext } from "../context/CartContext";

const CartWidget = () => {

    const { qtyProducts } = useContext(cartContext);
    
        return (
            <div className="cart-container">
                <ShoppingCartIcon sx={{ fontSize: 30 }} />
                <p className="text-cart">{qtyProducts}</p>
            </div>
        )
       
    
}

export default CartWidget