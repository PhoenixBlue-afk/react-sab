import React from "react"
import { Link } from "react-router-dom";


export const Counter = ({cantidad, count, setCount, agregar, agregado}) =>{
    console.log(agregado);
    

    const handleSumar = ()=> {
         if(count < cantidad){
             setCount(count+1)
              return count
         }
            
    }

    const handleRestar = () => {
        
        if (count > 1) {
            setCount(count-1)
             return count  

        }
              
    }

     




    return(
        <><div id="contador">
                    <button className="btn btn-outline-primary" id="menos" onClick={handleRestar}>-</button>
                    <p className="numero">{count}</p>
                    <button className="btn btn-outline-primary"id="mas" onClick={handleSumar}>+</button> 
                </div>
                <div>
                
                 {
            agregado 
            ? <Link to="/Carrito" id="botonLargo" className="btn btn-outline-success" >Terminar Compra!!</Link>
            
            :<button className="btn btn-outline-primary" onClick={agregar} id="botonLargo">Agregar al carrito!!</button>
            }
                
                </div>

       
            
            
            
            
        </>  
        
    )
}