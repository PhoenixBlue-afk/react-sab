import  { createContext } from "react";
import { useState } from "react";

export const CarritoContext = createContext()


export const CarritoProvider = ({children})=> {
    
    const [carrito, setCarrito]= useState([])

  

  const agregarCarrito = (prod)=> {
    

    setCarrito([
      ...carrito,
      prod
    ])
  }
  

  const acumuladorCarrito = ()=> {
      return carrito.reduce ((acc, prod)=> acc + prod.count, 0) 
  }
  const eliminarCarrito = (id) => {
    setCarrito(carrito.filter(prod => prod.id !== id))
  }
  const vaciarCarrito = () =>{
    setCarrito([])
  }

  const isInCart = (id)=>{
    return carrito.some(el => el.id === id)
  }
    
    
    
    return (
        


        <CarritoContext.Provider value={{carrito, agregarCarrito, acumuladorCarrito, eliminarCarrito, vaciarCarrito, isInCart}}>
            {children}
        </CarritoContext.Provider>
    )
}