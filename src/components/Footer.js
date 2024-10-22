import React from 'react';
import './Footer.css';
import footerPic from '../assets/images/footerPic.jpg'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={footerPic} alt="footer" className="big-logo" />
        </div>

        {/* Doormat Navigation */}
        <div className="footer-doormat-nav">
          <h2 className="footer-heading">Doormat Navigation</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact-info">
          <h2 className="footer-heading">Contact Info</h2>
          <p>123 Main Street, Anytown, USA</p>
          <p>Phone: +1 (234) 567-890</p>
          <p>Email: info@restaurant.com</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h2 className="footer-heading">Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
