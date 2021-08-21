import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos';

//import { Item } from './Item';
import { ItemList } from './ItemList';
export const ItemListContainer =(props)=> {

    const [data, setData]= useState([]);

    const [loading,setLoading] = useState (false) 


useEffect(()=> {
    setLoading(true)
    pedirDatos()
    .then(res =>setData([...res]))
    .finally (()=> {setLoading(false)})
    
},[])



    
    return <main className = "itemsList">

    <h1>Bienvenid@, le esperabamos</h1>
    <p>{`${props.greeting} Todos nuestros articulos cuentan con amplio stock`}</p>
    <hr/>
    
        {
            loading ? <h2>Cargando, por favor espere...</h2>
            : <ItemList productos={data}/>
             
        }
    
    </main>
}