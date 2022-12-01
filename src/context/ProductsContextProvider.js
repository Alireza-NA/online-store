import React,{ useEffect , createContext , useState } from 'react';
// API
import { getProducts } from '../services/api';


export const ProductContext = createContext();

const ProductsContextProvider = ({children}) => {

    const [ products , setProducts] = useState([]);
    useEffect ( ()=> {
        const fetchAPI= async ()=>{
            setProducts (await getProducts());
        }
        fetchAPI();
    },[])

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductsContextProvider;