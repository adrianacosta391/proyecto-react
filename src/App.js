import React from 'react';
import './App.css';
import ItemListContainer from './components/header/ItemListContainer.js';
import Navbar from './components/header/NavBar'

const App = () => {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting='Bienvenido a CB'/>
    </>
  );
}

export default App;
