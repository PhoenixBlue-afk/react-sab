import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar/NavBar.js'
import { NavBar } from './components/NavBar/NavBar.js';
import {ItemListContainer} from './components/container/ItemListContainer.js';
//import { BrowserRouter, Switch, Route } from "react-router-dom";


//import { Router } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (<div>
        <header>
          <NavBar/>
        </header>
        <ItemListContainer greeting = "Somos la libreria mas grande del pais"/>
        </div>
    /*<BrowserRouter>
    <Switch>
      <Route exact path ="/">
        
        <h1 className="subTitulo">Carrito de compras</h1>
        
      </Route>
      <Route exact path= "/Productos">
      <header>
          <NavBar/>
        </header>
      </Route>
      </Switch>
    </BrowserRouter>*/
  );
}

export default App;
