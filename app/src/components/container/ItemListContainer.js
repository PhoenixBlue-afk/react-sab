import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


import { pedirDatos } from '../../helpers/pedirDatos';

//import { Item } from './Item';
import { ItemList } from './ItemList';
import { Navegacion } from './navegacion';
export const ItemListContainer =(props)=> {

    
    const {catId} =useParams()
    
     


    const [data, setData]= useState([]);

    const [loading,setLoading] = useState (false) 


    useEffect(()=> {
    setLoading(true)
    pedirDatos()
    .then(res =>{
        if (catId) {
            const arrayFiltrado =res.filter(prod => prod.category === catId)
            setData (arrayFiltrado) 
        }else{
            setData(res)
        }
    }
    )
    .finally (()=> {setLoading(false)})
    
},[catId])



    
    return <main className = "itemsList">

    <h1>Bienvenid@, le esperabamos</h1>
    <p>{`${props.greeting} Todos nuestros articulos cuentan con amplio stock`}</p>
    <hr/>
    
    <Navegacion/>
        {
            loading ? <h2>Cargando, por favor espere...</h2>
            : <ItemList productos={data}/>
             
        }
    
    </main>
}