import React, {useContext, useState}from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Counter } from '../Counter/Counter'


export const ItemDetail = ({id,title,category,description,price,pictureUrl,cantidad})=>{
    
    const {agregarCarrito, isInCart} = useContext(CarritoContext)
    const [count, setCount] = useState (1)

    const add = () =>{
        agregarCarrito({
           id, title, category, description, price, pictureUrl, count 
        })
    }
    
    

    return (
        
        <div id="detalle">
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
                        <h6>Stock actual: {cantidad}</h6>
                        <Counter cantidad = {cantidad} count= {count} setCount= {setCount} agregar= {add} agregado={isInCart(id)}/>
                    </div>
                </div>
                
                

                
                
            </div>
        

        </div>
    )
}