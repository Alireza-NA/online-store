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

    return (
        <div className={styles.cards__container}>
            {
                Products.map(item => <Card
                key={item.id} 
                title = {item.title}
                price = {item.price}
                image = {item.image}
                productData={item} 
                />)
            }
        </div>
    );
};

export default Cards;