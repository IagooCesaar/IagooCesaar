import React from 'react';

import '../styles/components/header.css'

const Header: React.FC = () => {
  return (
    <head className="headerContainer">
      <nav>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Portfolio</a></li>
        <li><a href="/">Contact</a></li>
      </nav>
    </head>
  );
}

export default Header;