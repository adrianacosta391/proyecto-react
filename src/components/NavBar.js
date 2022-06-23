import React from "react"
import logo from '../assets/logo.png'
import '../components/NavBar.css'
import CartWidget from "./CartWidget"

const Navbar = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <h1>CODERBURGER!✔</h1>
            <nav>
                <a className="itemnav" href="'#'">MENU</a>
                <a className="itemnav" href="'#'">NOSOTROS</a>
                <a className="itemnav" href="'#'">CONTACTO</a>
            </nav>
            <CartWidget cantidad={1}/>
        </header>
    )
}

export default Navbar

