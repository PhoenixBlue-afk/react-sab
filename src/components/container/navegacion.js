import React from "react"
import { Link } from "react-router-dom"

export const Navegacion = ()=> {
    return <div className="linksDirectos">
        <nav>
            <p>Puede buscar por categoria</p>
            <Link className="enlaces" to="/Productos">Todos</Link>
            <Link className="enlaces" to="/Productos/category/Cuaderno">Cuadernos</Link>
            <Link className="enlaces" to="/Productos/category/Lapiz">Lapices</Link>
            <Link className="enlaces" to="/Productos/category/Lapicera">Lapiceras</Link>
            <Link className="enlaces" to="/Productos/category/LiquidPapper">Liquid Papper</Link>
            <Link className="enlaces" to="/Productos/category/Goma">Goma de borrar</Link>
        </nav>
    </div>
}