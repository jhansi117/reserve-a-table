import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming React Router is being used for navigation
import "./BookingForm.css";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("Birthday");
  const [seating, setSeating] = useState("Indoor");
  const navigate = useNavigate();

  // Options for dropdowns and diners
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const dinersOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingDetails = {
      date,
      time,
      guests,
      occasion,
      seating,
    };

    // Navigate to the ConfirmBooking page with bookingDetails as state
    navigate("/confirmation", { state: { bookingDetails } });
  };

  return (
    <div className="booking-container">
      {/* Header */}
      <h1 className="reservations-title">Reservations</h1>

      {/* Seating selection */}
      <div className="seating-selection">
        <label>
          <input
            type="radio"
            name="seating"
            value="Indoor"
            checked={seating === "Indoor"}
            onChange={(e) => setSeating(e.target.value)}
          />
          Indoor seating
        </label>
        <label>
          <input
            type="radio"
            name="seating"
            value="Outdoor"
            checked={seating === "Outdoor"}
            onChange={(e) => setSeating(e.target.value)}
          />
          Outdoor seating
        </label>
      </div>

      {/* Form Section */}
      <section className="reserve-form-section">
        <div className="reserve-grid-container">
          {/* Date */}
          <div className="reserve-form-group">
            <h3 className="reserve-date">Date</h3>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input-date"
              id="res-date"
            />
          </div>

          {/* Number of Diners */}
          <div className="form-group">
            <h3 id = "reserve-diners">No. of Diners</h3>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="select-diners"
            >
              {dinersOptions.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* Occasion */}
          <div className="form-group">
            <h3  id="reserve-occasion">Occasion</h3>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="select-occasion"
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Engagement">Engagement</option>
              <option value="get-together">Get - together</option>
            </select>
          </div>

          {/* Time */}
          <div className="form-group">
            <h3 id="reserve-time">Time</h3>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="select-time"
            >
              {availableTimes.map((availableTime) => (
                <option key={availableTime} value={availableTime}>
                  {availableTime}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Submit Button */}
      <button className="reserve-button" onClick={handleSubmit}>
        Reserve a Table
      </button>

      {/* Images Section */}
      <section className="images-section">
        <img
          src="https://cdn.loveandlemons.com/wp-content/uploads/2023/12/vegetarian-lasagna-scaled.jpg"
          alt="Restaurant 1"
        />
        <img
          src="https://assets.bonappetit.com/photos/5c634f0d050c433e0a336d6a/1:1/w_2560%2Cc_limit/healthyish-french-onion-horizontal.jpg"
          alt="Restaurant 2"
        />
        <img
          src="https://images5.alphacoders.com/431/thumb-1920-431638.jpg"
          alt="Restaurant 3"
        />
      </section>
    </div>
  );
};

export default BookingForm;
