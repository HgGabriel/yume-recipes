import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <img src="/logo.jpg" alt="" />
      <p>&copy; 2021 Yume Recipesa. Todos os Direitos reservados</p>
      <div className={styles.social}>
        <a href="https://www.github.com" target="_blank" rel="noreferrer">
          <i className="bi-github"></i>
          <p>@HgGabriel</p>
          
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <i className="bi-linkedin"></i>
          <p>@Gabriel</p>
        </a>

        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <i className="bi-instagram"></i>
          <p>@Gabriel</p>
        </a>
      </div>
    </div>
  );
};
export default Footer;
