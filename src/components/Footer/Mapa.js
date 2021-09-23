import React from 'react'
import { Link } from 'react-router-dom'

export const Mapa = () =>{
    
    return(
        <>
        <div id="final">
            <Link to={"/"} className= "links">Inicio</Link>
            <Link to={"/Nosotros"} className= "links">Nosotros</Link>
            <Link to={"/Productos"} className= "links">Productos</Link>
        </div>
        </>
    )
}