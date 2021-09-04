import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CarritoContext } from "../../context/CarritoContext";

export const ShoppingCart =() =>{

    const {acumuladorCarrito} = useContext (CarritoContext)
    console.log(acumuladorCarrito);
    return(
           <Link to="/Carrito">
                <div>
                    <FaShoppingCart id="icono" />
                    <span>{acumuladorCarrito()}</span>
                </div>
            </Link> 
    )
}