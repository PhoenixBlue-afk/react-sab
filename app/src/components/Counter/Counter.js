


export const Counter = ({max, cantidad, setCantidad}) =>{
    

    const handleSumar = () =>{
        if(cantidad < max){
            setCantidad(cantidad+1)
            return cantidad
        }
        
    }

    const handleRestar = () =>{
        if (cantidad > 1) {
            setCantidad(cantidad-1)
            return cantidad    
        }
        
    }

     




    return(
        
            <div id="contador">
                <button className="btn btn-outline-primary" id="menos" onClick={handleRestar}>-</button>
                <p className="numero">{cantidad}</p>
                <button className="btn btn-outline-primary"id="mas" onClick={handleSumar}>+</button> 
            </div>
            
        
    )
}