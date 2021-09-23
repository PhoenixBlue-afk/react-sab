import React, { useContext, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { darOrden } from "../../helpers/darOrden";
import Swal from 'sweetalert2'
import { Redirect } from "react-router";



export const Checkout = () => {
    
    const {carrito, valorTotal, vaciarCarrito} = useContext(CarritoContext)

    const modificadorDatos = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const generar = (e)=>{
        e.preventDefault()
        darOrden(values, carrito, valorTotal)
        .then((res)=> {
            Swal.fire({
                icon: 'success',
                title: 'Compra registrada con exito',
                text: `Por favor, guarde su identificador: ${res}`,
                confirmButtonText: 'Entendido'
            })
            vaciarCarrito()
        })
        .catch((err)=>{
            console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'Error de stock',
                    text: 'No pudimos registrar su orden',
                    footer:`No contamos con stock suficiente`
                })

        } 
            )
    } 

    

    const [values, setValues]= useState({
        nombre:'',
        email:'',
        telefono:'',
    })
    
    return(
        <>
        {!carrito.length
            ?<Redirect to="/"/>
            :<div>
            <h1>Por favor complete los datos para generar su orden</h1>
            <form id="formulario" onSubmit={generar}>
                <label>Nombre Completo</label>
                <input type="text" value={values.nombre} onChange={modificadorDatos} placeholder="Juan Carlo" name="nombre" required></input><hr/>
                <label>E-mail</label>
                <input type="email" placeholder="example@example.com.ar" value={values.email} onChange={modificadorDatos} name="email" required></input><hr/>
                <label>Telefono/Celular</label>
                <input type="tel" placeholder="11 1111-1111" value={values.telefono} onChange={modificadorDatos} name="telefono" required></input><hr/>
                <button className="btn btn-outline-success" type="submit">Generar numero de orden</button>
            </form>
        </div>
            }
        </>
    )
}