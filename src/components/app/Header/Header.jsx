import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    Avatar
    <div>
      <Link to={'/'}>Home</Link>
    </div>
  </header>
);

export default Header;
