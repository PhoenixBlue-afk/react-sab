import './App.css';
import './components/NavBar/NavBar.js'
import { NavBar } from './components/NavBar/NavBar.js';
import {ItemListContainer} from './components/container/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <h1 className="subTitulo">Carrito de compras</h1>
      
      <ItemListContainer greeting = {"Todos los elementos del carrito"}/>
    </div>
  );
}

export default App;
