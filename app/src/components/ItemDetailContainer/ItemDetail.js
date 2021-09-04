import React from 'react'
import { Counter } from '../Counter/Counter'
import { useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext';
import  { useContext } from 'react'  


export const ItemDetail = ({id,title,category,description,price,pictureUrl,stock})=>{
    
    const {agregarCarrito} = useContext(CarritoContext)

    const [cantidad,setCantidad]= useState(1)

    const handleApp = () =>{
        agregarCarrito([
            id, title,category, description, price, pictureUrl, cantidad
        ])
    }

    

    return (
        
        <div>
            <h2 className="detalle-prod">Detalle del Producto</h2>
            <div className="container">
                <h2 className="titulo-detalle-prod">{title} </h2>
                <div  id="seccion-prod">
                    <div id="formatoImg">
                      <img className="foto-detalle-prod" src={pictureUrl} alt={title}/>  
                    </div>
                    <div className="sub-titulos-prod">
                        <h4 className="categoria-detalle-prod">Categoria:{category}</h4>
                        <h4 className="precio-detalle-prod">Precio:${price}</h4>
                        <p className="info-detalle-prod">
                            {description}<br/>
                            Id: {id}<br/>
                        </p>
                        <Counter max ={stock} cantidad={cantidad} setCantidad={setCantidad}/>
                        <button className="btn btn-outline-primary" id="botonLargo" onClick={handleApp}>Agregar al carrito!!</button>
                    </div>
                </div>
                
                

                
                
            </div>
        

        </div>
    )
}