import React from 'react';
import './App.css';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import Navbar from './components/header/NavBar'
import Cart from './components/header/Cart';
import CartContext from './components/context/CartContext';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <CartContext>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting='Bienvenido a CB'/>} />
            <Route path="/category/:categoryName" element={<ItemListContainer greeting='Bienvenido a CB'/>} />
            <Route path="/item/:itemId" element={<ItemDetailContainer greeting='Detalles del producto'/>} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
