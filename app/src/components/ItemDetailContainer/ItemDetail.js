import React from 'react'


export const ItemDetail = ((id,title,category,description,price,pictureUrl)=>{
    
    return (
        
        <div>
            <h2>Detalle del Producto</h2>
            <h2>{title} </h2>
            <span>
                <img src={pictureUrl} alt={title}/>
                <p>
                    {description}
                    Id: {id}
                    Categoria:{category}
                    Precio:{price}
                </p>
            </span>

        </div>
    )
})