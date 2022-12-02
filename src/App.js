import { Route , Routes } from "react-router-dom";
// Context
import ProductsContextProvider from "./context/ProductsContextProvider"; 
// Styles
import './styles/App.scss';

// Pages
import Home from './pages/Home';

// Components
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <ProductsContextProvider> 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Cards />}/>
        </Routes>
      </ProductsContextProvider>
      <Footer />
    </>
  );
}

export default App;
