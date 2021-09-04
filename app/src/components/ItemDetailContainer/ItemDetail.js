import React from 'react'


export const ItemDetail = ({id,title,category,description,price,pictureUrl})=>{
    
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
                        <div id="contador">
                            <button className="btn btn-outline-primary" id="menos">-</button>
                            <p className="numero">0</p>
                            <button className="btn btn-outline-primary"id="mas">+</button> 
                        </div>
                        
                        <button className="btn btn-outline-primary" id="botonLargo">Agregar al carrito!!</button>
                    </div>
                </div>
                
                

                
                
            </div>
        

        </div>
    )
}