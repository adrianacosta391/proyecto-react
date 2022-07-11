import React from "react"
import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"
import "../../App.css"

const Navbar = () => {

    const categories = [
        {name:"BURGERS", id:0, route:"/category/burgers"},
        {name:"BEBIDAS", id:1, route:"/category/bebidas"},
        {name:"POSTRES", id:2, route:"/category/postres"},
    ]
    return (
        <header>
            <Link to="/"><img className="logo" src="https://i.imgur.com/baiHGk0.png" alt="logo" /></Link>
            <h1>CODERBURGER!✔</h1>
            <nav>
                {categories.map((category) => <Link key={category.id} className="itemnav" to={category.route}>{category.name}</Link>)}
            </nav>
                <Link to="/cart"><CartWidget cantidad={1}/></Link>
            
        </header>
    )
}

export default Navbar

