import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    Avatar
    <div>
      <Link to={'/'}>Home</Link>
    </div>
  </header>
);

export default Header;
