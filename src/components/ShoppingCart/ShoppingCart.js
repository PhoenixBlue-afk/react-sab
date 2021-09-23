import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {CarritoContext} from '../../context/CarritoContext'


export const ShoppingCart =() =>{

const {acumuladorCarrito, carrito} = useContext(CarritoContext)
    return(<div>
        {/* eslint-disable-next-line */}
        {(carrito == 0) ? 
            <p>Carrito vacio</p>
            :
            <Link to="/Carrito">
                <div>
                    <FaShoppingCart id="icono" />
                    <span>{acumuladorCarrito()}</span>
                </div>
            </Link> 
        
        }
    </div>
        
           
    )
}