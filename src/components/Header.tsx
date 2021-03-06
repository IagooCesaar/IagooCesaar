import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/header.css'

const Header: React.FC = () => {
  return (
    <head className="headerContainer">
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </nav>
    </head>
  );
}

export default Header;