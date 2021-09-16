import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { pedirDatos } from "../../helpers/pedirDatos";
import {  getFirestore } from '../firebase/config';
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () =>{

const [item, setItem]= useState(null)
const [loading,setLoading] = useState(false)

const {itemId} = useParams()


useEffect(()=>{
        const db = getFirestore()
        const productos = db.collection('productos')
        const item = productos.doc(itemId)


        setLoading(true)
        item.get().then((response)=>{
            setItem({...response.data(), id: response.id})
        })

        // pedirDatos()
        //     .then( res => {
        //         setItem( res.find( prod => prod.id === parseInt(itemId)))
        //     })
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