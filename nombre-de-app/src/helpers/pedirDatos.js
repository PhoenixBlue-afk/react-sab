import { stock } from "../components/data/stock";


export const pedirDatos= (valor)=>{
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve (stock)
        }, 2000);
    })
}