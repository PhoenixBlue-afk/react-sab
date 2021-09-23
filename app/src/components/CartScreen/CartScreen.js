import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from "react-router-dom";


export const CartScreen =()=>{
    const {carrito, eliminarCarrito, vaciarCarrito} = useContext(CarritoContext)

            return (
                <div id="ajuste">
                    <div id="botonJusto">
                    <Link id="arreglado" className="volver" to="/Productos">Sientase libre de volver a la lista de productos cuando guste</Link>

                    </div>
                    
                    
                    
                    <h1>Resumen de su Compra</h1>
                    {carrito.map(prod =>(
                        <div className="row" id="prodInfo" key={prod.id}>
                            <div className="infoCarrito">
                                <h3>{prod.title}</h3>
                                <p>cantidad: {prod.count}</p>
                                <p>Precio: {prod.price * prod.count}</p>
                            </div>
                            <div id="tacho">
                                <button id="eliminarDelCarrito" onClick={()=>{eliminarCarrito(prod.id)}}><BsFillTrashFill/><p>Eliminar del carrito</p></button>
                            </div>
                            
                        </div>
                    ))}
                    {/* eslint-disable-next-line */}
                    {carrito == 0 ? 
                    <div id="botonesFinales">
                        <button className="btn btn-outline-primary"><Link id="casi" to="/Productos">Regrese por favor y seleccione algunos de nuestro productos</Link></button>
                    </div>
                    :
                    <div id="botonesFinales">

                    <button id="vacioTotal" className="btn btn-outline-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <Link to="/Checkout" className="btn btn-success"> Confirmar Compra</Link>
                    </div>
                    
                    }
                </div>
            )
        
    
    
    
    
}