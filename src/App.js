import React from 'react';
import './App.css';
import ItemDetailContainer from './components/header/ItemDetailContainer';
import ItemListContainer from './components/header/ItemListContainer.js';
import Navbar from './components/header/NavBar'

const App = () => {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting='Bienvenido a CB'/>
    <ItemDetailContainer greeting='Detalles del producto'/>
    </>
  );
}

export default App;
