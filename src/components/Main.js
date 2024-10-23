import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";
import footerPic from "../assets/images/hero-pic.jpg";

function Main() {
  const navigate = useNavigate();

  const handleReserveTable = () => {
    navigate("/reservations"); // Navigates to the reservations page
  };

  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="text-section-main">
          <h1 className="little-lemon">Little Lemon</h1>
          <h2 className="chicago">Chicago</h2>
          <div className="para-section-main">
            <p>
              Little Lemon is a family owned Mediterranean restaurant, focused
              on traditional recipes served with a modern twist.
            </p>
          </div>
          <button className="reserve-button" onClick={handleReserveTable}>
            Reserve Table
          </button>
        </div>

        <div className="image-section-main">
          <img src={footerPic} alt="Description" />
        </div>
      </div>
    </div>
  );
}

export default Main;
