import React from 'react';
import './Nav.css';
import cart from '../assets/images/cart.svg'

function Nav({ isOpen }) {
  return (
    <nav className={isOpen ? "navbar open" : "navbar"}>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order">Order Online</a></li>
        <li><a href="#login">Login</a></li>
        <li className="login-cart">
          <img src={cart} alt="Cart Icon" className="cart-icon" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
