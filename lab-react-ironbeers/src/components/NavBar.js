// components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/beers'>All Beers</Link></li>
        <li><Link to='/random-beer'>Random Beer</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;