import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {CarritoContext} from '../../context/CarritoContext'


export const ShoppingCart =() =>{

const {acumuladorCarrito, carrito} = useContext(CarritoContext)
    return(<div>
        {(carrito == 0) ? 
            <p>sin carrito</p>
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