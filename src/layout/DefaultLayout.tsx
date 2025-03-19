import React from 'react';
import { Outlet } from 'react-router';
import HeaderNav from '../components/HeaderNav/HeaderNav';
import Footer from '../components/Footer/Footer';
import styles from './DefaultLayout.module.scss';

const DefaultLayout: React.FC = () => {
  return (
    <div className={styles.defaultLayout}>
      <header>
        <HeaderNav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;