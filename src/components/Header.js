import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Nav from './Nav';
import logo from '../assets/images/logo.svg';
import './Header.css';
import hamburger from '../assets/images/hamburger.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu when hamburger icon is clicked
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      {/* Wrap logo in Link to navigate to Home */}
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <button className="hamburger" onClick={toggleMenu}>
        <img src={hamburger} alt="Hamburger Icon" />
      </button>
      <Nav isOpen={isOpen} />
    </header>
  );
}

export default Header;
