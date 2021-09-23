import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {  getFirestore } from '../firebase/config';
import { ItemList } from './ItemList';
import { Navegacion } from './navegacion';

export const ItemListContainer =(props)=> {

    
    const {catId} =useParams()
    
     


    const [data, setData]= useState([]);

    const [loading,setLoading] = useState (false) 


    useEffect(()=> {
    setLoading(true)
    // USANDO FIREBASE
    const db = getFirestore()
    const productos = db.collection('productos')

        if (catId) {
            const arrayFiltrado = productos.where('category','==', catId)
            arrayFiltrado.get()
            .then((response)=>{
                const data = response.docs.map((doc)=>({...doc.data(),id: doc.id})) 
                setData(data)
                
            }).finally (()=> {setLoading(false)})
        }else{
            productos.get()
            .then((response)=>{
        
                const data = response.docs.map((doc)=>({...doc.data(),id: doc.id})) 
                setData(data)
                
            }).finally (()=> {setLoading(false)})

        }
        
    
    },[catId])
 
    return <main  className = "itemsList">

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