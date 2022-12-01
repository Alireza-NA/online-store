// Context
import ProductsContextProvider from "./context/ProductsContextProvider"; 
// Styles
import './styles/App.scss';

// Components
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";


function App() {
  return (
    <>
      <Navbar />
      <ProductsContextProvider>
        <Cards />
      </ProductsContextProvider>
    </>
  );
}

export default App;
