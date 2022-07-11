import React from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../../App.css'

const CartWidget = ({cantidad}) => {
    return (
    <div className="cart-container">
        <ShoppingCartIcon sx={{ fontSize: 30 }} />
        <p className="text-cart">{cantidad}</p>
    </div>)
       
    
}

export default CartWidget