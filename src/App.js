import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer.js';
import Navbar from './components/NavBar'

const App = () => {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting='Bienvenido a CB'/>
    </>
  );
}

export default App;
