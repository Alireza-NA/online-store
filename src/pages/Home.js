import React from 'react';
// Styles
import styles from '../styles/Home.module.scss';

// Images
import shopping from '../assets/shopping.jpg'
const Home = () => {
    return (
        <div className={styles.home__container}>
            <div className={styles.content}>
                <h1>Summer styles are finally here</h1>
                <p>This year, our new summer collection will shelter you
                    from the harsh elements of a world that doesn't
                    care if you live or die.</p>
                <button>Shop Now</button>
            </div>
            <div className={styles.image}>
                <img src={shopping} alt='shoping-vector'/>
            </div>

        </div>
    );
};

export default Home;    