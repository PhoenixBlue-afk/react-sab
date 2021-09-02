import { React } from "react";
import { Item } from "./Item";
//import { Form, FormControl } from "react-bootstrap";

export const ItemList = ( {productos=[]})=> {

    /*const [buscar, setBuscar] = useState ('')
    const handleInputBuscar = (e) =>{
        setBuscar(e.target.value);
    }
    const handleBuscar = (e) =>{
        e.preventDefault()
        //se ve el buscar() hay que usar dom para mostrarlo remplazando el 
    }
*/

    return <section className= "container my-5">
        <h2>Productos</h2>
        
        <hr/>
        <div className="row">
        { productos.map((prod)=> <Item key={prod.id} {...prod}/> )}
        </div>

    </section>
}
//<Form className="form" onSubmit={handleBuscar}>
            //<FormControl type="text" value= {buscar} onChange={handleInputBuscar}/>
            //<button type="submit" className="btn btn-primary" >Buscar</button>
        //</Form>