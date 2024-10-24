import React from 'react';
import './Card.css'; // Make sure to create a separate CSS file for styling
import { useNavigate } from 'react-router-dom';

const Card = ({ dish }) => {
  const navigate = useNavigate()
  return (
    <div className="card">
      <img src={dish.image} alt={dish.name} className="card-image" />
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{dish.name}</h3>
          <span className="card-price">${dish.price}</span>
        </div>
        <p className="card-description">{dish.description}</p>
        <button className="add-to-cart-button" onClick={() => navigate('/booking')}>Visit Us</button>
      </div>
    </div>
  );
};

export default Card;
