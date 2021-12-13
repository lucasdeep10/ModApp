import { BrowserRouter } from "react-router-dom";
//* -- Estilos --
import "bootswatch/dist/quartz/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
<<<<<<< HEAD

//Components
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
=======
import 'animate.css'
//* --Components--
import RoutesApp from "./router/Routes";
import Footer from "./components/Footer/Footer";
>>>>>>> 3e55f3b0986f29360cc69f751579d60b0a14443b
import NavBar from './components/NavBar/NavBar';
import CartContextProvider from "./context/CartContext";





function App() {
  return (
   
    <CartContextProvider>
      <BrowserRouter>
         <div className="App">
          <NavBar/>
          <RoutesApp/>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartContextProvider>
      
   
  );
}

export default App;
