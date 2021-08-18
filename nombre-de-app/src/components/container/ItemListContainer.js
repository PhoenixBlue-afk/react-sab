import React from 'react'
export const ItemListContainer =(props)=> {


    return <main className = "itemsList">

    <h1>Hola mundo</h1>
    <p>{`Aqui irian los objetos del carrito: ${props.greeting}`}</p>
    </main>
}