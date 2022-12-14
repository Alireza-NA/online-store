import React from 'react';
import { Link } from 'react-router-dom';
// helpers
import { Shorten } from '../../helpers/functions';
// Styles
import styles from '../../styles/Card.module.scss';


const Card = ({title , image , price , id}) => {
    return (
        <div className={styles.card}>
            <img src={image} alt='product'/>
            <h2> {Shorten(title)}</h2>
            <span className={styles.price}>$ {price}</span>
            {   
            <div className={styles.info__container}>
                <div className={styles.details}>
                    <button><Link to={`/shop/${id}`}>Details</Link></button>
                </div>
                <div className={styles.btns}>
                    <button>Add to Cart</button>
                </div>
            </div>
            }
        </div>
    );
};

export default Card;