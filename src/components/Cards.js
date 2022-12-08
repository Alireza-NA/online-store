import React, { useContext } from 'react';

// Components
import Card from './shared/Card'
// Styles
import styles from '../styles/Cards.module.scss'
// Context 
import { ProductContext } from '../context/ProductsContextProvider';

const Cards = (props) => {

    const Products = useContext(ProductContext);
    console.log(Products);

    // const electronics = Products.filter(item => item.category === "electronics");
    // const mens = Products.filter(item => item.category === "men's clothing");
    // const jewelery = Products.filter(item => item.category === "jewelery");
    // const womens = Products.filter(item => item.category === "women's clothing");
    // console.log(electronics);
    // console.log(jewelery);
    // console.log(mens);
    // console.log(womens);
    

    return (
        <>
        <div className={styles.cards__container}>
            {
                Products.map(item => <Card
                key={item.id} 
                title = {item.title}
                price = {item.price}
                image = {item.image}
                productData={item} 
                id = {item.id}
                />)
            }
        </div>
        </>
    );
};

export default Cards;