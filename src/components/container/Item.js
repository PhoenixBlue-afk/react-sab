import React from "react";
import { Link } from "react-router-dom";
export const Item = ({id, pictureUrl,title,description,price, cantidad})=>{
    return<div key={id}  id="card" className="card col-4">
                <img id="foto" src={pictureUrl} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
                <h6>Stock actual: {cantidad}</h6>
                <p>El precio es de $ {price}</p>
                <Link to={`/detail/${id}`} className="btn btn-outline-primary">Ver mas</Link> 
            </div>
}