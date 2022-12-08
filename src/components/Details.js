import React,{useEffect , useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

// Styles
import styles from "../styles/Details.module.scss";

const DETAIL_URL = 'https://fakestoreapi.com/products/';

const Details = () => {

    const params = useParams();
    const id = params.id;
    console.log(id);

    const [data , setData] = useState([]);
    console.log(data);

    useEffect(()=> {
        const fetchAPI = () =>{
            axios.get(`${DETAIL_URL}${id}`)
            .then(response=> setData(response.data));
        }
        fetchAPI();
    },[id]); 

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={data.image} alt='product'/>
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>{data.title}</h1>
                <span className={styles.category}>{data.category}</span>
                <p className={styles.price}>{data.price}</p>
                <div className={styles.description}>{data.description}</div>
                <Link to='/shop'><button>Back to Shop</button></Link>      
            </div>
        </div>
    );
};

export default Details;