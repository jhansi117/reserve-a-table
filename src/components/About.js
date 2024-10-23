import React from 'react';
import './About.css'; // Create a CSS file for styling
import owners from '../assets/images/owners.jpg';


const About = () => {
  return (
    <div className="about-container">
      <div className="image-section-about">
        <img 
          src={owners} // Replace with your image URL
          alt="Little Lemon Chefs" 
          className="chefs-image" 
        />
      </div>
      <div className="text-section-about">
        <h2 className='about-heading'>About Little Lemon</h2>
        <p className='about-little-lemon'>
          Little Lemon is a charming restaurant that has been serving delicious meals since 1995. Our chefs are dedicated to using fresh, locally sourced ingredients to create mouthwatering dishes that delight the senses. With a cozy atmosphere and friendly service, we aim to make every dining experience special. Come and taste the love in every bite!
        </p>
      </div>
    </div>
  );
};

export default About;
