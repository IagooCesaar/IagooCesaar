import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/header.css'

const Header: React.FC = () => {
  return (
    <head className="headerContainer">
      <nav>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Portfolio</Link></li>
        <li><Link to="/">Contact</Link></li>
        <li><Link to="/">Home</Link></li>
      </nav>
    </head>
  );
}

export default Header;