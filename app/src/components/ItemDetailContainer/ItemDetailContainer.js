import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { pedirDatos } from "../../helpers/pedirDatos";

import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () =>{

const [item, setItem]= useState(null)
const [loading,setLoading] = useState(false)

const {itemId} = useParams()
console.log(item);

    useEffect(()=>{

        setLoading(true)

        pedirDatos()
            .then( res => {
                setItem( res.find( prod => prod.id === parseInt(itemId)))
            })
            .finally(()=> setLoading(false))
    }, [itemId])




    return (
        <div>
            <div className="naveg">
                <Link  className="volver" to="/Productos">◀ Volver al listado de Productos</Link>
            </div>
           
            {loading ? <h2>Cargando, por favor espere</h2> : <ItemDetail {...item} />}
            
        </div>
    )
}