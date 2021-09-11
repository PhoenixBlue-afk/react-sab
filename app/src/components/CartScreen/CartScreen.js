import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import {BsFillTrashFill} from 'react-icons/bs'

export const CartScreen =()=>{
    const {carrito, eliminarCarrito, vaciarCarrito} = useContext(CarritoContext)
    
    
    
    return (
        <>
        <h1>Resumen de su Compra</h1>
        {carrito.map(prod =>(
            <div className="row my-col-5" key={prod.id}>
                <div className="infoCarrito">
                    <h3>{prod.title}</h3>
                    <p>cantidad: {prod.count}</p>
                    <p>Precio: {prod.price * prod.count}</p>
                </div>
                    <button><BsFillTrashFill onClick={() => eliminarCarrito(prod.id)}/><p>eliminar del carrito</p></button>
                
            </div>
        ))}
        
        <button className="bt btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
        </>
    )
}