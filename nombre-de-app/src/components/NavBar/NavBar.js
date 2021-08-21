import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar =()=> {
    return <div className="nav">
        <CartWidget/>
        <ul className= "lista">
            <li className= "links">Enlace 1</li>
            <li className= "links">Enlace 2</li>
            <li className= "links">Enlace 3</li>
            
        </ul>
    </div>
}