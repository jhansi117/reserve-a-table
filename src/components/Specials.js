import React from "react";
import Card from "./Card"; // Import the Card component
import "./Specials.css"; // Create a CSS file for styling

const Specials = () => {
  // Sample data for today's specials
  const specials = [
    {
      name: "Margherita Pizza",
      price: 10.99,
      description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
      image:
        "https://www.foodandwine.com/thmb/7BpSJWDh1s-2M2ooRPHoy07apq4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mozzarella-pizza-margherita-FT-RECIPE0621-11fa41ceb1a5465d9036a23da87dd3d4.jpg", // Replace with your image URL
    },
    {
      name: "Caesar Salad",
      price: 9.99,
      description: "Crispy romaine lettuce with Caesar dressing and croutons.",
      image:
        "https://t4.ftcdn.net/jpg/02/02/48/35/360_F_202483549_3cDh8uaQ5OJG9GUDsp9YKSQNt69rjucc.jpg", // Replace with your image URL
    },
    {
      name: "Tiramisu",
      price: 7.99,
      description: "A classic Italian dessert made with coffee and mascarpone.",
      image: "https://images5.alphacoders.com/431/thumb-1920-431638.jpg", // Replace with your image URL
    },
  ];

  return (
    <div className="specials-container">
      <div className="specials-header">
        <h2>Today's Specials</h2>
      </div>
      <div className="cards-container">
        {specials.map((dish, index) => (
          <Card key={index} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default Specials;
