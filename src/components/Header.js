import React, { useState } from 'react';
import Nav from './Nav';
import logo from '../assets/images/logo.svg';
import './Header.css';
import hamburger from '../assets/images/hamburger.svg'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu when hamburger icon is clicked
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <button className="hamburger" onClick={toggleMenu}>
        <img src={hamburger} alt="Hamburger Icon" />
      </button>
      <Nav isOpen={isOpen} />
    </header>
  );
}

export default Header;
