import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import { ShoppingCart } from '../ShoppingCart/ShoppingCart'

export const NavBar =()=> {
    return <div className="nav">

        <nav className= "lista">
            <Link to="/"><CartWidget/></Link>
            <Link to={"/"} className= "links">Inicio</Link>
            <Link to={"/Nosotros"} className= "links">Nosotros</Link>
            <Link to={"/Productos"} className= "links">Productos</Link>

            
        </nav>
        <ShoppingCart/>
    </div>
}