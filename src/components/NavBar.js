import React from "react"
import logo from '../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../components/NavBar.css'

const Navbar = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <h1>CODERBURGER!✔</h1>
            <nav>
                <a className="itemnav" href="">MENU</a>
                <a className="itemnav" href="">NOSOTROS</a>
                <a className="itemnav" href="">CONTACTO</a>
            </nav>
            <ShoppingCartIcon />
        </header>
    )
}

export default Navbar

