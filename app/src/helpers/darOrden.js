import firebase from 'firebase/app'
import 'firebase/firestore';
import { getFirestore } from '../components/firebase/config';

export const darOrden =  (Comprador, carrito, valorTotal) =>{
    
    return new Promise(async (resolve, reject) =>{
        const db = getFirestore()
        const pedidos = db.collection('Pedidos')

        const pedidoNuevo = {
            Comprador: Comprador,
            Productos: carrito,
            Total: valorTotal(),
            Fecha: firebase.firestore.Timestamp.fromDate(new Date())
        }
        
        const itemsAActualizar = db.collection('productos')
        .where(firebase.firestore.FieldPath.documentId(),'in', carrito.map(prod => prod.id))
        
        const batch = db.batch()
        const query = await itemsAActualizar.get()

        const sinStock = []
        

        query.docs.forEach((doc)=>{
            const itemInCart = carrito.find(el => el.id === doc.id)
            
            if (doc.data().cantidad >= itemInCart.count) {
                batch.update(doc.ref, {cantidad: doc.data().cantidad - itemInCart.count})
                
            }else{
                sinStock.push({id: doc.id, ...doc.data()})
            }
        })

        sinStock.length === 0 
            ?pedidos.add(pedidoNuevo)
            .then((res)=> {
                batch.commit()
                
                resolve(res.id)
            }) 
            .catch((err)=>{
            reject (err)
            })

            :reject({
                error: 'Productos agotados',
                outOfStock: sinStock
            })
            
        
       
    

    
    
    
    })
    
    
}
// actualizar stock 1 x 1
    // carrito.forEach((producto)=>{
    //     const refDoc = db.collection('productos').doc(producto.id)
    //     refDoc.get()
    //     .then(doc =>{
    //         refDoc.update({
    //             cantidad: doc.data().cantidad - producto.count
    //         })
    //     })
    // })