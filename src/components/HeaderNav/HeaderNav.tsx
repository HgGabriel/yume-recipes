import React from 'react';
import { Link } from 'react-router';
import styles from  './HeaderNav.module.scss'; 

const HeaderNav: React.FC = () => {
  return (
    <nav className={styles.headerNav}>
      <img src="/logo.png" alt="Yume Recipes Logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/favorites">Favoritos</Link></li>
      </ul>
    </nav>
  );
};

export default HeaderNav;