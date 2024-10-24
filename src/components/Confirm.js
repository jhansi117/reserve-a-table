import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to access location state
import "./Confirm.css";

const Confirm = () => {
  const location = useLocation(); // Use useLocation hook to access location
  const { bookingDetails } = location.state || {}; // Get bookingDetails from location state

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [agreeToPolicy, setAgreeToPolicy] = useState(false);

  // Function to handle form submission
  const handleConfirm = (e) => {
    e.preventDefault();
    if (!agreeToPolicy) {
      alert("Please agree to the privacy policy");
      return;
    }
    // Form validation can be expanded as needed
    if (!firstName || !lastName || !email || !phone) {
      alert("All fields are required");
      return;
    }
    alert("Your reservation has been confirmed, kindly check your email");
  };

  return (
    <div className="confirm-container">
      {/* Header */}
      <h1 className="confirm-heading">Reservation Confirmation</h1>

      

      {/* User Information Form */}
      <form className="confirm-form" onSubmit={handleConfirm}>
        <div className="confirm-form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="confirm-form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="confirm-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="confirm-form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="confirm-form-group">
          <label htmlFor="specialRequests">Special Requests</label>
          <textarea
            id="specialRequests"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
          />
        </div>
        {/* Booking Details */}
      <div className="booking-details">
        {/* <h3>Your Reservation Details</h3> */}
        {/* Add null check to avoid error if bookingDetails is undefined */}
        {bookingDetails ? (
          <>
            <p><strong>Date:</strong> {bookingDetails.date}</p>
            <p><strong>Time:</strong> {bookingDetails.time}</p>
            <p><strong>No. of Diners:</strong> {bookingDetails.guests}</p>
            <p><strong>Occasion:</strong> {bookingDetails.occasion}</p>
            <p><strong>Seating:</strong> {bookingDetails.seating}</p>
          </>
        ) : (
          <p>No booking details available.</p>
        )}
      </div>
        <div className="confirm-form-group policy-check">
          <label>
            <input
              type="checkbox"
              checked={agreeToPolicy}
              onChange={() => setAgreeToPolicy(!agreeToPolicy)}
              required
            />
            I agree to the friendly privacy policy
          </label>
        </div>
        {/* Confirm Button */}
        <button className="confirm-button" type="submit">
          Confirm Reservation
        </button>
      </form>
    </div>
  );
};

export default Confirm;
