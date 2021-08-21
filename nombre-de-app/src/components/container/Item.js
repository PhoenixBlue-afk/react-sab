import React from "react";
export const Item = ({item})=>{
    return<div className="card col-4">
                <img src={item.pictureUrl} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
            </div>
}