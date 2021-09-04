import  { createContext } from "react";
import { useState } from "react";

export const CarritoContext = createContext()


export const CarritoProvider = (children)=> {
    
    const [carrito, setCarrito]= useState([])

  

  const agregarCarrito = (prod)=> {
    

    setCarrito([
      ...carrito,
      prod
    ])
  }
  function prePaso(acc,prod){
    acc=0; 
    acc= acc + prod.cantidad
    return acc
  }

  function acumuladorCarrito() {
      carrito.reduce (prePaso) 
      return carrito
     
  }
  const eliminarCarrito = (id) => {
    setCarrito(carrito.filter(prod => prod.id !== id))
  }
  const vaciarCarrito = () =>{
    setCarrito([])
  }

    
    
    
    return (
        


        <CarritoContext value={{carrito, agregarCarrito, acumuladorCarrito, eliminarCarrito, vaciarCarrito}}>
            {children}
        </CarritoContext>
    )
}