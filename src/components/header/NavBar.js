import React, { useState, useEffect } from "react"
import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"
import "../../App.css"
import { db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore"

const Navbar = () => {

   

    useEffect(() => {
        
    const categoriesCollection = collection(db,'categories');
    getDocs(categoriesCollection)
    .then(result => {
        const list = result.docs.map(doc => {
            return {
                ...doc.data(),

            }
        })

        setCategories(list)
        
    })

    }, []);

    const [categories, setCategories] = useState([]);


   
    return (
        <header>
            <Link to="/"><img className="logo" src="https://i.imgur.com/baiHGk0.png" alt="logo" /></Link>
            <h1>CODERBURGER!✔</h1>
            <nav>
                {categories.map((category) => <Link key={category.key} className="itemnav" to={category.route}>{category.name}</Link>)}
            </nav>
                <Link className="cart-container" to="/cart"><CartWidget/></Link>
            
        </header>
    )
}

export default Navbar

