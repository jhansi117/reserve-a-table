import React from 'react';
import './Nav.css';
import cart from '../assets/images/cart.svg';
import { useNavigate } from 'react-router-dom';

function Nav({ isOpen }) {
  const navigate = useNavigate();

  return (
    <nav className={isOpen ? "navbar open" : "navbar"}>
      <ul>
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/about')}>About</li>
        <li onClick={() => navigate('/menu')}>Menu</li>
        <li onClick={() => navigate('/reservations')}>Reservations</li>
      </ul>
    </nav>
  );
}

export default Nav;
