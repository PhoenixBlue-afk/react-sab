import React from "react";
import { Link } from "react-router-dom";
export const Item = ({pictureUrl,title,description,price,id})=>{
    return<div className="card col-4">
                <img src={pictureUrl} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{price}</p>
                <Link to={`/detail/${id}`} className="btn btn-outline-primary">Ver mas</Link> 
            </div>
}