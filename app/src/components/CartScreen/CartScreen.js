import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

export const CartScreen =()=>{
    const {carrito, eliminarCarrito, vaciarCarrito} = useContext(CarritoContext)
    
    
    
    return (
        <>
        <h1>Resumen de su Compra</h1>
        {carrito.map(prod =>(
            <div  key={prod.id}>
                <h3>{prod.title}</h3>
                <p>cantidad: {prod.cantidad}</p>
                <p>cantidad: {prod.precio * prod.cantidad}</p>
                <button onClick={() => eliminarCarrito(prod.id)}></button>
            </div>
        ))}
        
        <button className="bt btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
        </>
    )
}