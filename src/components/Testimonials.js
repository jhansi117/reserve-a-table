import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css'; // Create a CSS file for styling

const Testimonials = ({ testimonials }) => {
  // Slider settings
  const settings = {
    dots: true, // Enable dots
    infinite: true, // Loop through slides
    speed: 500, // Animation speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed
  };

  return (
    <div className="testimonials-container">
      <h2 className='testi-heading'>What Our Customers Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <img src={testimonial.image} alt={testimonial.dishName} className="dish-image" />
            <h3>{testimonial.dishName}</h3>
            <div className="star-rating">{'★'.repeat(testimonial.rating)}</div>
            <p className='testi-comments'>{testimonial.comment}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
