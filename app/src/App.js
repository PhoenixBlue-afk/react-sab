import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar/NavBar.js'
import { NavBar } from './components/NavBar/NavBar.js';
import {ItemListContainer} from './components/container/ItemListContainer.js';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Nosotros } from './components/Nosotros/Nosotros';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CarritoProvider } from './context/CarritoContext';
import { CartScreen } from './components/CartScreen/CartScreen';
import {Footer} from './components/Footer/Footer'
import { Checkout } from './components/Checkout/Checkout';




function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
    <>
        <header>
          <NavBar/>
        </header>
        
    </>
    <Switch>
      <Route exact path ="/">
        
        <h1 className="subTitulo">Sea Bienvenido a <br/>Mundo Lapiz</h1>
        
      </Route>
      <Route exact path= "/Nosotros">
        <Nosotros/>
      </Route>

      <Route exact path= "/Productos">
        <ItemListContainer greeting = "Somos la libreria mas grande del pais"/>
      </Route>

      <Route exact path= "/Productos/category/:catId">
        
        <ItemListContainer greeting = "Somos la libreria mas grande del pais"/>
      </Route>

      <Route exact path= "/detail/:itemId">
        <ItemDetailContainer/>
      </Route>

      <Route exact path="/Carrito">
        <CartScreen/>
      </Route>
      
      <Route exact path="/CheckOut">
      <Checkout/>

      </Route>

      <Route path="*">
        <Redirect to="/" />
      </Route>
      </Switch>
      
        <Footer/>
      
    </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;
