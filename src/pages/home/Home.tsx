import React from 'react';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <>
      <HomeBanner />
      <div className={styles.trendingContainer}>
        <h1>
          Destaques
        </h1>
        <div className={styles.trending}>
          <div className={styles.mainTrendingCard}>
            <img src="https://images.unsplash.com/photo-1617196905100-216ffe128142?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sushi Tradicional" />
            <div className={styles.mainTrendingCardInfo}>
              <h2>Sushi Tradicional</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;