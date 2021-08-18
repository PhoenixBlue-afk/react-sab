import './App.css';
import './components/NavBar/NavBar.js'
import { NavBar } from './components/NavBar/NavBar.js';
import {ItemListContainer} from './components/container/ItemListContainer.js';
import {CartWidget} from './components/CartWidget/CartWidget'

function App() {
  return (
    <html>
      <header>
        <CartWidget/>
        <NavBar/>
      </header>
      <h1 className="subTitulo">Carrito de compras</h1>
      <ItemListContainer greeting = "Todos los elementos del carrito"/>
      
    </html>
  );
}

export default App;
