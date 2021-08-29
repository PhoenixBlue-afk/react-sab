import { stock } from "../components/data/stock";


export const pedirDatos= ()=>{
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve (stock)
        }, 2000);
    })
}