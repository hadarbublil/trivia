import React from 'react';
import './Navbar.css';
import { useState } from 'react';
const Navbar = () => {
    const [showCategories, setShowCategories] = useState(false);
  

  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
      HomePage
    </a>
  </div>
  <div className="navbar-right">
        <a href="/speedRound">Speed Round</a>
  </div>
 
</nav>
);
};

export default Navbar;