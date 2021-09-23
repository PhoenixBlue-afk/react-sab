import { React } from "react";
import { Item } from "./Item";


export const ItemList = ( {productos=[]})=> {



    return <section id="correccion" className= "container my-5">
        <h2>Productos</h2>
        
        <hr/>
        <div className="row">
        {/* eslint-disable-next-line */}
        {productos == 0
        ? <div> <h2>Fatal Error</h2> <hr/> <p>Revise su busqueda</p></div>
        :  productos.map((prod)=> <Item key={prod.id} {...prod}/> )
        }


        </div>

    </section>
}
