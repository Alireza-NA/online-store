import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from '../styles/Navbar.module.scss'
// Icons
import bag from '../assets/bag.svg';
import search from '../assets/search.svg';
import logo from '../assets/logo.svg';


const Navbar = () => {
    return (
        <div className={styles.nav__container}>
            <div className={styles.left__nav}>
                <div className={styles.hamburguer }>
                    <span className={styles.hamburguer__item}></span>
                    <span className={styles.hamburguer__item}></span>
                    <span className={styles.hamburguer__item}></span>
                </div>
                <Link to='/'><img className={styles.image} src={logo} alt='logo'/></Link>
                <ul>
                    <li><Link to='shop/Electronics' >Electronics</Link></li>
                    <li><Link to='shop/Jewelery' >Jewelery</Link></li>
                    <li><Link to='shop/MensClothing' >Men's Clothing</Link></li>
                    <li><Link to='shop/WomensClothing' >Women's Clothing</Link></li>
                </ul>
            </div>
            <div className={styles.right__nav}>
                <div className={styles.user}>
                    <p>Sign in</p>
                    <p>Create account</p>
                </div>
                <i><img src={search} alt='search'/></i>
                <i><img src={bag} alt='basket'/></i>
            </div>
            
        </div>
    );
};

export default Navbar;