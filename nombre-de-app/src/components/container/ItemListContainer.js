import React from 'react'
export const ItemListContainer =(props)=> {


    return <div className = "itemsList">

    <h1>Hola mundo</h1>
    <p>{`Aqui irian los objetos del carrito: ${props.greeting}`}</p>
    </div>
}