import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    Avatar
    <div>
      <button className={styles.links}>
        <Link to={'/'} style={{textDecoration: 'none' }}>Home</Link>
      </button>
    </div>
  </header>
);

export default Header;
