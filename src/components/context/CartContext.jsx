import React, { createContext, useState, useEffect } from 'react'

export const cartContext = createContext();
const { Provider } = cartContext;



const CartContext = ({children}) => {

const [products, setproducts] = useState([]);
const [qtyProducts, setQtyProducts] = useState(0);
console.log(products)



const getQtyProducts = () =>{
    let qty = 0;
    products.forEach(product => {
        qty += product.qty;
    }
    )
    setQtyProducts(qty);
}

useEffect(() => {
    getQtyProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [products]);



const addProducts = (product) =>{
    if (isInCart(product.id)) {
        const found = products.find(p => p.id === product.id);
        const index = products.indexOf(found);
        const aux = [...products];
        aux[index].qty += product.qty;
        setproducts(aux);
    } else {
        setproducts([...products,product])
    };
}

const removeProducts = (id) =>{
    setproducts(products.filter(product => product.id !== id));

}
const clear = () => {
    setproducts([]);
    setQtyProducts(0);
}

const isInCart = (id) =>{
    return products.some(products => products.id === id);

}

 return (
    <Provider value={{products,qtyProducts,addProducts,removeProducts,clear,getQtyProducts}}>
        {children}
    </Provider>
  )
}

export default CartContext